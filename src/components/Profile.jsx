import React, { Component, Fragment } from 'react';
import axios from "axios";

// like CategoryList = howdiyList, filteredList (filtered by user creation)
// get info of Howdiys and Info of User 

class Profile extends Component {

  state = {
    profileData: null,
    isLoading: true,
  }

    // Use axios to fetch the DATA! -- credentials gives BE access to this request session. Authorization!
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_HOST}/profile`, { withCredentials: true })
    .then( (response) => {
      this.setState({ profileData:response.data, isLoading: false })
    })
    .catch( (err) => {
      console.log(err.response.status) // => the error message status code
      if (err.response.status === 403) {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    const { profileData, isLoading} = this.state;
    const { user } = this.props;
    return (
      <div>
        {isLoading && <h1>...isLoading!</h1>}
        {!isLoading && 
          <>
          <h1>Howdiy {user.username}! Here is your Profile</h1>
          <h5> /extra feature/ User Avatar - Cowboy Themed Add to User Model</h5>
          <h3> First Name: {user.firstName}</h3>
          <h3> Last Name: {user.lastName}</h3>
          <hr></hr>
          <h1> My Howdiys map??? list - on this list - edit and delete</h1>
        </>
        }
      </div>
    )
  }
}

export default Profile;

