import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { routes } from "./appRoutes";
import AppLayout from "./components/Layouts/App/Layout";

const App = () => {
  return (
    <AppLayout>
      <Switch>
        {routes.map(route => (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </AppLayout>
  );
};

export default withRouter(App);
