import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import NewGreetingCat from "./NewGreetingCats";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/cat/:greeting" component={GreetingCat} />
      <Route exact path="/new-cat/:greeting" component={NewGreetingCat} />
    </Router>
  );
}

export default App;