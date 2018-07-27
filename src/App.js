import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import View from "./components/View.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/" />
          <Route exact path="/" component={View} />
        </div>
      </Router>
    );
  }
}

export default App;
