import React, { Component, Fragment } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import recipeService from "./services/recipe-services";
import "./categories/Categories.css";
import "./root.css";

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
    const { myHowdiys, isLoadingHowdiy } = this.state;
    const { user } = this.props;
    return (
      <div>
        {user && (
          <>
            <div className="profileSection">
              <h1>Howdiy {user.username}!</h1>
              <div className="profileChild"></div>
              <div className="profileText">
                <h6> First Name: {user.firstName}</h6>
                <h6> Last Name: {user.lastName}</h6>
                <h6> Username: {user.username}</h6>
                <h6> Logging in with: {user.email}</h6>
              </div>
            </div>
            <br />
            <hr></hr>
            <h2 className="profileSection"> Your Howdiys:</h2>
          </>
        )}
        {isLoadingHowdiy && <h1>...isLoading!</h1>}
        {!isLoadingHowdiy &&
          myHowdiys.map((eachHowdiy) => {
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

                      <NavLink
                        className="link"
                        to={`/howdiy/edit/${eachHowdiy._id}`}
                      >
                        EDIT
                      </NavLink>
                      <br></br>
                      <button
                        className="link"
                        onClick={() => {
                          this.deleteHowdiy(eachHowdiy._id);
                        }}
                      >
                        Delete
                      </button>
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

export default Profile;
