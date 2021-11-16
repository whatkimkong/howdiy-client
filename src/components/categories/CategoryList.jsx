import React, { Component, Fragment } from "react";
import recipeService from "../services/recipe-services"; // has to be the same?
import Search from "./Search";
import { NavLink } from "react-router-dom";


class CategoryList extends Component {
  state = {
    howdiyList: null,
    filteredList: null,
    isLoading: true,
  };

  handleFilter = (filter) => {
    const filteredList = this.state.howdiyList.filter((eachHowdiy) => {
      return eachHowdiy.descriptiveName 
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
    this.setState({
      filteredList: filteredList,
    });
  };

  componentDidMount() {
    const { category } = this.props.match.params; //destructuring and implementing from the params
    recipeService
      .getCategoryList(category)
      .then((response) => {
        this.setState({ howdiyList: response.data, filteredList: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { category } = this.props.match.params;
    const { filteredList, isLoading } = this.state;
    return (
      <div>
        <h1>{`${category[0].toUpperCase()}${category.slice(1)}`}</h1>
        <Search handleFilter={this.handleFilter} />
        {isLoading && <h1>is loading</h1>}
        {!isLoading &&
          filteredList.map((eachHowdiy) => {
            return (
              <>
                <h1> product image {eachHowdiy.productImg} </h1>
                <h1> Fun name {eachHowdiy.funName} </h1>
                <h1> descriptive name {eachHowdiy.descriptiveName} </h1>
                <NavLink key={eachHowdiy._id}to={`/howdiy/${eachHowdiy._id}`}>VIEW</NavLink>
                <hr></hr>
              </>
            );
          })}
      </div>
    );
  }
}
export default CategoryList;

//whole element clickable in return
//fetches information



/*   
handleFilter = () => {
    const { howdiyList } = this.state;
    return howdiyList.filter((howdiy) => howdiyList.includes(howdiy));
}
*/
