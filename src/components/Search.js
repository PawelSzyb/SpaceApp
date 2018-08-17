import React, { Component } from "react";
import axios from "axios";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      apiUrl: "https://images-api.nasa.gov/search",
      results: [],
      loading: false,
      step: 0
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
        .then(() => this.props.handleSubmit(this.state))
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div
        className={
          this.state.step === 1 ? "active search-wrapper" : "search-wrapper"
        }
      >
        <div className="search">
          <form onSubmit={this.onSubmit}>
            <input
              id="search"
              value={this.state.searchTerm}
              name="searchTerm"
              onChange={this.onSearchTermChange}
              className={this.state.step === 1 ? "dark" : ""}
            />
            <button
              className={this.state.step === 1 ? "btn btn-dark" : "btn"}
              type="button"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
