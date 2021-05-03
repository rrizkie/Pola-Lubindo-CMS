import CMS from "./pages";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./context/state";

function App() {
  return (
    <Provider>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <CMS />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
