import React, { Component, Fragment } from "react";
import recipeService from "../services/recipe-services"; // has to be the same?
import Search from "./Search";
import { NavLink } from "react-router-dom";
import "./Categories.css";
import housecareTitle from "./img/housecareGrey.png";
import bodycareTitle from "./img/Bodycare.png";
import facecareTitle from "./img/Facecare.png";
import playTitle from "./img/Play.png";
import foodTitle from "./img/Food.png";
import drinkTitle from "./img/Drink.png";

class CategoryList extends Component {
  state = {
    howdiyList: null,
    filteredList: null,
    isLoading: true,
    difficultyRating: null,
    timeOfPreparation: null,
    costRating: null,
    createdBy: null,
    ingredients: null,
  };

  handleFilter = (filter) => {
    const filteredByDescriptList = this.state.howdiyList.filter((eachHowdiy) => {
      return eachHowdiy.descriptiveName
      .toLowerCase()
      .includes(filter.toLowerCase()) || eachHowdiy.funName
      .toLowerCase()
      .includes(filter.toLowerCase());
    });
    this.setState({
      filteredList: filteredByDescriptList,
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
          ingredients: response.data,
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
        { category === 'facecare' && <img src={facecareTitle} alt="title" className="title title-img" />}
        { category === 'bodycare' && <img src={bodycareTitle} alt="title" className="title title-img" />}
        { category === 'housecare' && <img src={housecareTitle} alt="title" className="title title-img" />}
        { category === 'play' && <img src={playTitle} alt="title" className="title title-img" />}
        { category === 'food' && <img src={foodTitle} alt="title" className="title title-img" />}
        { category === 'drink' && <img src={drinkTitle} alt="title" className="title title-img" />}
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
                        className="button-link"
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


          const filteredByFunNameList = this.state.howdiyList.filter((eachHowdiy) => {
      return eachHowdiy.funName
      .toLowerCase()
      .includes(filter.toLowerCase());
    });
    this.setState({
      filteredList: filteredByFunNameList,
    });
    const filteredByIngredientsList = this.state.howdiyList.filter((eachHowdiy) => {
      return eachHowdiy.ingredients.name.toLowerCase()
      .includes(filter.toLowerCase());
    });
    this.setState({
      filteredList: filteredByIngredientsList,
    });
*/
