import CMS from "./pages/cms";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/cms">
          <CMS />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
