import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { LoginPage, HomePage } from "./routes";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </Router>
  );
};

export default App;
