import React, { Component, Fragment } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import recipeService from "./services/recipe-services";

// like CategoryList = howdiyList, filteredList (filtered by user creation)
// get info of Howdiys and Info of User

class Profile extends Component {
  state = {
    myHowdiys: null,
    isLoadingHowdiy: true,
  }; // can have multiple isLoadings !! spinners in different // can have multiple axios.bla's

  // Use axios to fetch the DATA! -- credentials gives BE access to this request session. Authorization!
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/profile/recipes`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ myHowdiys: response.data, isLoadingHowdiy: false });
      })
      .catch((err) => {
        console.log(err.response.status); // => the error message status code
        if (err.response.status === 403) {
          this.props.history.push("/login");
        }
      });
  }

  deleteHowdiy = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_HOST}/recipes/delete/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        //find the element in the state manually and remove it
        const newHowdiys = this.state.myHowdiys.filter((eachHowdiy) => {
          return eachHowdiy._id !== id;
        });

        this.setState({ myHowdiys: newHowdiys });
      })
      .catch((err) => {
        console.log(err.response.status); // => the error message status code
        if (err.response.status === 403) {
          this.props.history.push("/login");
        }
      });
  };

  render() {
    const { profileData, myHowdiys, isLoadingHowdiy } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h1>Howdiy {user.username}! Here is your Profile</h1>
        <h5> /extra feature/ User Avatar - Cowboy Themed Add to User Model</h5>
        <h3> First Name: {user.firstName}</h3>
        <h3> Last Name: {user.lastName}</h3>
        <hr></hr>
        <h1> My Howdiys</h1>
        {isLoadingHowdiy && <h1>...isLoading!</h1>}
        {!isLoadingHowdiy &&
          myHowdiys.map((eachHowdiy) => {
            return (
              <>
                <h1> product image {eachHowdiy.productImg} </h1>
                <h1> Fun name {eachHowdiy.funName} </h1>
                <h1> descriptive name {eachHowdiy.descriptiveName} </h1>
                <NavLink key={eachHowdiy._id} to={`/howdiy/${eachHowdiy._id}`}>VIEW</NavLink>
                <br>
                </br>
                <NavLink to={`/howdiy/edit/${eachHowdiy._id}`}>EDIT</NavLink>
                <button
                  onClick={() => {
                    this.deleteHowdiy(eachHowdiy._id);
                  }}
                >
                  Delete
                </button>
                <hr></hr>
              </>
            );
          })}
      </div>
    );
  }
}

export default Profile;
