import React, { Component } from "react";
import authService from "./services/auth-services";
//no axios needed here as Services/Auth-services is the master and does all the work

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, username, password } = this.state;

    authService
      .signup(firstName, lastName, email, username, password)
      .then((response) => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
        });
        this.props.setUser(response.data, true);
      });
  };

  render() {
    const { firstName, lastName, email, username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="firstname"
            value={firstName}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="lastname"
            value={lastName}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={email}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            value={username}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            value={password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Signup;
