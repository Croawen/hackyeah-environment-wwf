import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";

export default () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {routes.map(({ loader, ...route }, index) => {
          const Component = lazy(loader);
          return <Route key={index} {...route} component={Component} />;
        })}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};
