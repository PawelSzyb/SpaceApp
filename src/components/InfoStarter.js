import React, { Component } from "react";

import "./InfoStarter.css";

class InfoStarter extends Component {
  render() {
    return (
      <div className="info-wrapper">
        <h1 className="claim">SPACEX</h1>
        <p className="subclaim">
          Search to discover amazing information about universe and more.
          Adventure awaits. Type something something space-related to find out.
        </p>
      </div>
    );
  }
}

export default InfoStarter;
