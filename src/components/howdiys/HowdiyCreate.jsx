// this URL will be "/howdiy/create"

import axios from "axios";
import React, { Component } from "react";
// import recipeService from "../services/recipe-services";

class HowdiyCreate extends Component {
  state = {
    categoryList: [
      "facecare",
      "bodycare",
      "housecare",
      "play",
      "food",
      "drink",
    ],
    category: "",
    descriptiveName: "",
    ingredients: [
      {
        name: "",
        quantity: "",
      },
    ],
    preparation: [],
    productImg: "",
    isGiftable: true,
    gallery: [],
    timeOfPreparation: 0, // specify mins in form
    costRating: 0, // TIP on how to calculate in form
    difficultyRating: 0,
  };

  handleChange = (event) => {
    const { name, type, checked, value } = event.target
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const {
      category,
      descriptiveName,
      ingredients,
      preparation,
      productImg,
      isGiftable,
      gallery,
      timeOfPreparation,
      costRating,
      difficultyRating,
      createdBy,
    } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/recipes/create`,
        {
          category,
          descriptiveName,
          ingredients,
          preparation,
          productImg,
          isGiftable,
          gallery,
          timeOfPreparation,
          costRating,
          difficultyRating,
          createdBy,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  }; // this.setState({ categories: response.data, isLoading: false });

  render() {
    const {
      category,
      descriptiveName,
      ingredients,
      preparation,
      productImg,
      isGiftable,
      gallery,
      timeOfPreparation,
      costRating,
      difficultyRating,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="category">Category</label>
          <select onChange={this.handleChange} name="category" id="category-select">
            <option value="">Please select the category of your product</option>
            <option value="facecare">Facecare</option>
            <option value="bodycare">Bodycare</option>
            <option value="housecare">Housecare</option>
            <option value="play">Play</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>
          <br />
          <label htmlFor="descriptiveName">Descriptive Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="descriptiveName"
            value={descriptiveName}
          />
          <br />
          <label htmlFor="ingredients">Ingredients</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="ingredients"
            value={ingredients}
          />
          <br />
          <label htmlFor="preparation">Preparation</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="preparation"
            value={preparation}
          />
          <br />
          <label htmlFor="productImg" alt="Product Image">
            Product Image
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="productImg"
            value={productImg}
          />
          <br />
          <label htmlFor="gallery" alt="Your uploaded Howdiys">
            Gallery of your Howdiys
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="gallery"
            value={gallery}
          />
          <br />
          <label htmlFor="isGiftable">is Giftable</label>
          <input
            onChange={this.handleChange}
            type="checkbox"
            name="isGiftable"
            checked={isGiftable}
          />
          <br />
          <label htmlFor="timeOfPreparation">
            Rate how time consuming the Howdiy is
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            name="timeOfPreparation"
            value={timeOfPreparation}
          />
          <br />
          <label htmlFor="costRating">
            Rate how cost intense the Howdiy is
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            name="costRating"
            value={costRating}
          />
          <br />
          <label htmlFor="difficultyRating">
            Rate how difficult the Howdiy is
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            name="difficultyRating"
            value={difficultyRating}
          />
          <br />
          <br />
          <button type="submit">Create your Howdiy!!</button>
        </form>
      </div>
    );
  }
}

// hardcoded is okay but otherwise loop with a map

/* 
updateUser = (user) => { 
    recipeService
      .getUser(user)
      .then((response) => {
        this.setState({ createdBy: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });

 // in recipeService - contacting the BE uses the route recipe.routes.js
  getUser = (user) => {
    return this.service.get('/user');
  };
} */

export default HowdiyCreate;
