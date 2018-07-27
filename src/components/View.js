import React, { Component } from "react";
import axios from "axios";
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
      apiUrl: "https://images-api.nasa.gov/search",
      results: [],
      loading: false,
      isOpen: false
    };
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSearchTermChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.searchTerm.trim().length > 0) {
      axios
        .get(`${this.state.apiUrl}?q=${this.state.searchTerm}&media_type=image`)
        .then(res => {
          this.setState({
            results: res.data.collection.items,
            loading: false,
            step: 1
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { results } = this.state;

    // Displaying view content depending on step state
    let viewContent;
    if (this.state.step === 0) {
      viewContent = (
        <div>
          <InfoStarter />
          <Search
            onSearchTermChange={this.onSearchTermChange}
            onSubmit={this.onSubmit}
            step={0}
          />
          <InfoBackground />
        </div>
      );
    } else {
      viewContent = (
        <div>
          {" "}
          <Search
            onSearchTermChange={this.onSearchTermChange}
            onSubmit={this.onSubmit}
            step={1}
          />{" "}
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
