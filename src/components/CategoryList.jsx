import React, { Component, Fragment } from "react";
import recipeService from "./services/recipe-services"; // has to be the same?

class CategoryList extends Component {
  state = {
    howdiyList: null,
    isLoading: true,
  };

  /* componentDidMount() {
    recipeService.getCategoryList
      .then((response) => {
        this.setState({ howdiyList: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  } */

  render() {
    const { category } = this.props.match.params;
    const { howdiyList, isLoading } = this.state;
    return (
      <div>
        <h1>{category}</h1>
        <h1> SEARCH BAR </h1>
        <h1> LIST </h1>
        
        <h1> whole element clickable</h1>
      </div>
    );
  }
}
export default CategoryList;

// fetches information

/*
{howdiyList.map((eachHowdiy) => {
  return (
    <>
      <h1> product image {eachHowdiy.productImg} </h1>
      <h1> Fun name {eachHowdiy.funName} </h1>
      <h1> descriptive name {eachHowdiy.descriptiveName} </h1>
    </>
  );
})}
*/