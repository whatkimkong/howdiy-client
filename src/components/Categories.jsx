import React, { Component } from "react";
import { NavLink } from "react-router-dom";

//change the categories from null to an array /w enum
// no loading
export class Categories extends Component {
  state = {
    categories: ["Facecare", "Bodycare", "Housecare", "Play", "Food", "Drink"],
  };

  /*   componentDidMount() {
    recipeService.getCategories
      .then((response) => {
        this.setState({ categories: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  } */

  render() {
    const { categories } = this.state;
    return (
      <ul>
        <h1>Categories</h1>
        {categories.map((eachCategory) => {
          return (
            <li key={eachCategory}>
              <NavLink to={`/${eachCategory.toLowerCase()}/howdiy`}>
                {eachCategory}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Categories;

// for each --> NavLink with the category to="/:category/howdiy" (this will be the list of that category)

// in the list display we would need after render -- const { category } = this.props.match.params; from the /:category/howdiy URL
