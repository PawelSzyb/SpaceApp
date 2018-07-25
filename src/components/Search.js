import React, { Component } from "react";
import axios from "axios";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      apiUrl: "https://images-api.nasa.gov/search",
      results: []
    };
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSearchTermChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.searchTerm.trim().length > 0) {
      axios
        .get(`${this.state.apiUrl}?q=${this.state.searchTerm}&media_type=image`)
        .then(res => {
          this.setState({ results: res.data.collection.items });
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <div className="search-wrapper">
        <div className="search">
          <form onSubmit={this.onSubmit}>
            <input
              id="search"
              value={this.state.searchTerm}
              name="searchTerm"
              onChange={this.onSearchTermChange}
            />
            <button className="btn" type="btn" onClick={this.onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
