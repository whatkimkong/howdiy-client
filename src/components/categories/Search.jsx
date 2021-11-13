import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.props.handleFilter(value);
    this.setState({ [name]: value });
  };
  render() {
    const { search } = this.state;

    return (
      <div>
          <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={search}
            onChange={this.handleChange}
            />  
          </label>
      </div>
    );
  }
}
export default Search;


{/* <input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
        /> */
}