import React, { Component } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      apiUrl: "https://images-api.nasa.gov/search"
    };
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSearchTermChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    axios
      .get(`${this.state.apiUrl}?q=${this.state.searchTerm}&media_type=image`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="wrapper">
        <div className="search">
          <form onSubmit={this.onSubmit}>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              value={this.state.searchTerm}
              name="searchTerm"
              onChange={this.onSearchTermChange}
            />
            <button class="btn" type="btn" onClick={this.onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Home;
