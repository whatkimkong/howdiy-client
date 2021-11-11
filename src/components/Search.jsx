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
        <input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
        />
      </div>
    );
  }
}
export default Search;
