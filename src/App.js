import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
