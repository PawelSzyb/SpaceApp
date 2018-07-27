import React, { Component } from "react";
import Modal from "./Modal";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }
  handleModalOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const photo = this.props.item.links[0].href;
    const title = this.props.item.data[0].title;

    const style = {
      width: "100%",
      height: "300px",
      cursor: "pointer"
    };
    return (
      <div>
        <img src={photo} style={style} alt="" onClick={this.handleModalOpen} />
        {this.state.isOpen ? (
          <Modal
            handleModalOpen={this.handleModalOpen}
            item={this.props.item}
          />
        ) : null}
      </div>
    );
  }
}
