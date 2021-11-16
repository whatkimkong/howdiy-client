// THIS url will be - howdiy/:id
import React, { Component, Fragment } from "react";
// import recipeService from '../services/recipe-services';
import axios from "axios";

export class Howdiy extends Component {
  state = {
    funName: null,
    descriptiveName: null,
    ingredients: [
      {
        name: null,
        quantity: null,
      },
    ],
    preparation: [],
    productImg: null,
    isGiftable: false,
    gallery: [],
    timeOfPreparation: 0, // specify mins in form
    costRating: 0, // TIP on how to calculate in form
    difficultyRating: 0,
    createdBy: null,
    isLoadingHowdiy: true,
    isLoadingComments: true,
    input: "",
    commentList: null,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { input, createdBy } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/comments/create`,
        {
          input,
          createdBy,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  componentDidMount() {
    // how to destructure properly?
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/recipes/howdiy/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          funName: response.data,
          descriptiveName: response.data,
          ingredients: response.data,
          preparation: response.data,
          productImg: response.data,
          isGiftable: response.data,
          gallery: response.data,
          timeOfPreparation: response.data,
          costRating: response.data,
          difficultyRating: response.data,
          createdBy: response.data,
          isLoadingHowdiy: false,
        });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
    // add another axios here once we can create a comment
  }

  render() {
    const {
      funName,
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
      isLoadingHowdiy,
      isLoadingComments,
      input,
      commentList
    } = this.state;
    return (
      <>
        {isLoadingHowdiy && <h1>...isLoading!</h1>}
        {!isLoadingHowdiy && (
          <>
            <h5>
              Descriptive Name: Orange Lavendar Bath Bomb {descriptiveName}
            </h5>
            <h5>Also Known As: Gobbley FloopMaster {funName} </h5>

            <h5>
              {" "}
              Cost Rating xxx {costRating} / Difficulty Rating xxx{" "}
              {difficultyRating}{" "}
            </h5>
            <h5> Created By: {createdBy} </h5>

            <h5>
              {" "}
              Time to prepare: {timeOfPreparation} mins (to show in hours divide
              /60){" "}
            </h5>
            <h5>
              {" "}
              is Giftable: {isGiftable} we will need this --
              http://react.tips/checkboxes-in-react/{" "}
            </h5>

            <h5>Ingredients: --- NEEDS A MAP for {ingredients} </h5>
            <ul>
              <li>
                {" "}
                Here instead of ingredient would be eachIngredient{" "}
                {ingredients.name} {ingredients.quantity}
              </li>
            </ul>
            <h5>Preparation: --- NEEDS A MAP for {preparation} Step</h5>
            <ul>
              <li>eachPreparation</li>
            </ul>

            <h5>Product image: {productImg} </h5>

            <h5> A Dropdown here for Gallery Below {gallery} </h5>
          </>
        )}
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input">Add a comment:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="input"
            value={input}
          />
          <button type="submit">Send</button>
        </form>

        {isLoadingComments && <h1>...isLoading!</h1>}
        {!isLoadingComments && <h3> COMMENTS SECTION </h3>}
      </>
    );
  }
}

export default Howdiy;

/* 

add another axios on the bottom of the howdiy one 

axios
  .get(`${process.env.REACT_APP_API_HOST}/comments/all`)
  .then((response) => {
    this.setState({ commentList: response.data, isLoadingComments: false });
    })
    .catch((err) => {
      this.props.history.push("/500");
    });



will it have all the inputs and all the info in the commentList?




then in the render section below the create form:

{!isLoadingComments && 
          commentList.map((eachComment) => {
            return (
              <>
                <h1> {eachComment.input} </h1>
                <h1> {eachComment.createdBy} </h1>
                <hr></hr>
              </>
            );
          }
        )}


*/
