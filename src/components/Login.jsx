import React, { Component } from "react";
import authService from "./services/auth-services";
import './root.css';
import loginTitle from "./img/Login.png";

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
      <div className="login-signup-form">
      
        <img src={loginTitle} alt="title" className="title title-img" />
        <div className="root-text">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            placeholder="Your email here"
            value={email}
          /><br/><br/>
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            placeholder="Your password here"
            value={password}
          /><br/><br/>
          <button className="root-submit" type="submit">Login</button>
        </form>
        </div>
      </div>
    );
  }
}
export default Login;
