import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import InfoStarter from "./InfoStarter";
import Search from "./Search";
import InfoBackground from "./InfoBackground";
import Item from "./Item";
import Spinner from "./Spinner";

import "./View.css";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      searchTerm: "",
      results: [],
      loading: false,
      isOpen: false
    };
  }
  handleSubmit = data => {
    this.setState({
      results: data.results,
      loading: data.loading,
      step: data.step
    });
  };

  render() {
    const { results } = this.state;

    // Displaying view content depending on step state
    let viewContent;
    if (this.state.step === 0) {
      viewContent = (
        <div>
          <InfoStarter />
          <Search handleSubmit={this.handleSubmit} step={0} />
          <InfoBackground />
        </div>
      );
    } else {
      viewContent = (
        <div>
          {" "}
          <Search handleSubmit={this.handleSubmit} step={1} />{" "}
        </div>
      );
    }
    return (
      <div className="wrapper">
        {viewContent}
        <div className="list-result">
          <TransitionGroup className="grid-results">
            {results.map(item => (
              <CSSTransition
                key={item.data[0].nasa_id}
                timeout={1000}
                classNames="fade"
              >
                {this.state.loading ? (
                  <Spinner />
                ) : (
                  <div>
                    <Item
                      item={item}
                      handleModalOpen={this.handleModalOpen}
                      isOpen={this.state.isOpen}
                    />
                  </div>
                )}
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
export default View;
