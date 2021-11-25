import React, { Component, Fragment } from "react";
import recipeService from "../services/recipe-services"; // has to be the same?
import Search from "./Search";
import { NavLink } from "react-router-dom";
import "./Categories.css";
import housecareTitle from "./img/housecareGrey.png";

class CategoryList extends Component {
  state = {
    howdiyList: null,
    filteredList: null,
    isLoading: true,
    difficultyRating: null,
    timeOfPreparation: null,
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
          timeOfPreparation: response.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  }

  render() {
    const { category } = this.props.match.params;
    const { filteredList, isLoading } =
      this.state;
    const emptyStar = "☆";
    const fullStar = "★";
    return (
      <div>
        { category === 'facecare' && <img src={housecareTitle} alt="title" className="title" />}
        { category === 'bodycare' && <img src={housecareTitle} alt="title" className="title" />}
        { category === 'housecare' && <img src={housecareTitle} alt="title" className="title" />}
        { category === 'play' && <img src={housecareTitle} alt="title" className="title" />}
        { category === 'food' && <img src={housecareTitle} alt="title" className="title" />}
        { category === 'drink' && <img src={housecareTitle} alt="title" className="title" />}
        <h1>{`${category[0].toUpperCase()}${category.slice(1)}`}</h1>
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
                        View
                      </NavLink>
                      <hr></hr>
                      <p>Created by: {eachHowdiy.createdBy.username}</p>
                    </div>
                    <div className="howdiyListText">
                    <h6> Cost Rating: {fullStar.repeat(Math.round(eachHowdiy.costRating)) + emptyStar.repeat(3 - Math.round(eachHowdiy.costRating))}</h6>
                    <h6> Difficulty Rating: {fullStar.repeat(Math.round(eachHowdiy.difficultyRating)) + emptyStar.repeat(3 - Math.round(eachHowdiy.difficultyRating))}</h6>
                    <h6> Time Intensity: {fullStar.repeat(Math.round(eachHowdiy.timeOfPreparation)) + emptyStar.repeat(3 - Math.round(eachHowdiy.timeOfPreparation))}</h6>
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
            {fullStar.repeat(roundedUpCost) + emptyStar.repeat(3 - roundedUpCost)}
            {fullStar.repeat(roundedUpDifficulty) + emptyStar.repeat(3 - roundedUpDifficulty)}
            {fullStar.repeat(roundedUpTime) + emptyStar.repeat(3 - roundedUpTime)}
          </h2>
*/
