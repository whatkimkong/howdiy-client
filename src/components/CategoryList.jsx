import React, { Component } from "react";

class CategoryList extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <h1>{category}</h1>
      </div>
    );
  }
}
export default CategoryList;


// fetches information