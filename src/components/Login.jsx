import React, { Component } from "react";
import authService from "./services/auth-services";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    authService.login(email, password).then((response) => {
      this.setState({ email: "", password: "" });
      this.props.setUser(response.data, true);
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={email}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            value={password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
