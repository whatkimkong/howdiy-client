import React, { Component, Fragment } from "react";
import recipeService from "./services/recipe-services"; // has to be the same?

class CategoryList extends Component {
  state = {
    howdiyList: null,
    isLoading: true,
  };

  componentDidMount() {
    const { category } = this.props.match.params; //destructuring and implementing from the params
    recipeService
      .getCategoryList(category)
      .then((response) => {
        this.setState({ howdiyList: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { category } = this.props.match.params;
    const { howdiyList, isLoading } = this.state;
    return (
      <div>
        <h1> SEARCH BAR </h1>
        {isLoading && <h1>is loading</h1>}
        {!isLoading &&
          howdiyList.map((eachHowdiy) => {
            return (
              <>
                <h1> product image {eachHowdiy.productImg} </h1>
                <h1> Fun name {eachHowdiy.funName} </h1>
                <h1> descriptive name {eachHowdiy.descriptiveName} </h1>
              </>
            );
          })}
      </div>
    );
  }
}
export default CategoryList;

// whole element clickable in return
// fetches information
