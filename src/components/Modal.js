import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readMoreActive: false
    };
    this.readMore = this.readMore.bind(this);
  }

  readMore() {
    this.setState({ readMoreActive: !this.state.readMoreActive });
  }

  render() {
    const { item } = this.props;
    const { description } = item.data[0];

    return (
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <div className="photo">
            <img src={item.links[0].href} alt="" />
          </div>
          <div className="description">
            <h2 className="title">{item.data[0].title}</h2>
            <p
              className={`description-text ${
                this.state.readMoreActive ? "active" : ""
              }`}
            >
              {description.length > 200 ? (
                <span>
                  {this.state.readMoreActive ? (
                    <span>
                      {description.substring(0, 350)}
                      <br />
                      <button onClick={this.readMore}>Read less</button>
                    </span>
                  ) : (
                    <span>
                      {description.substring(0, 200)}
                      <span>...</span>
                      <br />
                      <button onClick={this.readMore}>Read More</button>
                    </span>
                  )}
                </span>
              ) : (
                <span>{description}</span>
              )}
            </p>
          </div>
        </div>
        <div className="close" onClick={this.props.handleModalOpen} />
      </div>
    );
  }
}

export default Modal;
