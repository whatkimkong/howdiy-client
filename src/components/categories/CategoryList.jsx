import React, { Component, Fragment } from "react";
import recipeService from "../services/recipe-services"; // has to be the same?
import Search from "./Search";
import { NavLink } from "react-router-dom";
import "./Categories.css";
import title from "./img/housecareGrey.png";

class CategoryList extends Component {
  state = {
    howdiyList: null,
    filteredList: null,
    isLoading: true,
    difficultyRating: null,
    costRating: null,
    createdBy: null,
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
        this.setState({
          howdiyList: response.data,
          filteredList: response.data,
          createdBy: response.data,
          costRating: response.data,
          difficultyRating: response.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { category } = this.props.match.params;
    const { filteredList, isLoading, costRating, difficultyRating } =
      this.state;
    const roundedUpCost = Math.round(costRating);
    const roundedUpDifficulty = Math.round(difficultyRating);
    const emptyStar = "☆";
    const fullStar = "★";
    return (
      <div>
        <h1>{`${category[0].toUpperCase()}${category.slice(1)}`}</h1>
        <img src={title} alt="title" className="title" />
        <Search handleFilter={this.handleFilter} />
        {isLoading && <h1>is loading</h1>}
        {!isLoading &&
          filteredList.map((eachHowdiy) => {
            return (
              <>
                <div className="howdiyListed">
                  <div className="howdiyListChild">
                    <img
                      className="howdiyListImg"
                      src={eachHowdiy.productImg}
                      alt="productImage"
                    />
                    <div className="howdiyListText">
                      <h4>{eachHowdiy.funName}</h4>
                      <h5>{eachHowdiy.descriptiveName}</h5>
                      <NavLink
                        className="link"
                        key={eachHowdiy._id}
                        to={`/howdiy/${eachHowdiy._id}`}
                      >
                        VIEW
                      </NavLink>
                      <hr></hr>
                      <p>Created by: {eachHowdiy.createdBy.username}</p>
                    </div>
                  </div>
                </div>
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


<h2>
            {fullStar.repeat(roundedUpCost) + emptyStar.repeat(5 - roundedUpCost)}
            {fullStar.repeat(roundedUpDifficulty) + emptyStar.repeat(5 - roundedUpDifficulty)}
          </h2>
*/
