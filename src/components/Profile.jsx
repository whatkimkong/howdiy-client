import React, { Component } from 'react';
import axios from "axios";


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
    return (
      <div>
        <h1>Profile Page</h1>
        {isLoading && <h1>...isLoading!</h1>}
        {!isLoading && <h3>{profileData.message}</h3>}
      </div>
    )
  }
}

export default Profile;

