import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <DefaultLayout />
      </Router>
    </>
  );
}

export default App;
