import "bootstrap/scss/bootstrap.scss";
import "ladda/dist/ladda-themeless.min.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Route as PublicRoute,
  Router,
  Switch
} from "react-router-dom";
import "./App.scss";
import { loginPath } from "./routes.js";
import routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import { isLoggedIn } from "./utils/auth";
import ScrollToTop from "./utils/ScrollToTop";
import history from "./redux/history";
import { Provider } from "react-redux";
import store from "./redux/store";

const PrivateRoute = ({ ...props }) =>
  isLoggedIn() ? <PublicRoute {...props} /> : <Redirect to={loginPath} />;

const bootstrap = async () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop>
          <div className="noselect">
            <Suspense fallback={<p>Loading...</p>}>
              <Switch>
                {routes.map(route => {
                  const Component = lazy(route.loader);
                  const Route = route.protected ? PrivateRoute : PublicRoute;

                  return (
                    <Route
                      key={route.name}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      component={Component}
                    />
                  );
                })}
              </Switch>
            </Suspense>
          </div>
        </ScrollToTop>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

bootstrap();
