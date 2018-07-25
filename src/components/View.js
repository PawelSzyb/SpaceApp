import React, { Component } from "react";

import InfoStarter from "./InfoStarter";
import Search from "./Search";

import "./View.css";

class View extends Component {
  render() {
    return (
      <div className="wrapper">
        <InfoStarter />
        <Search />
      </div>
    );
  }
}
export default View;
