import "./App.css";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import authService from "./components/services/auth-services";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    isLoggedIn: null,
    user: null,
  };

  setUser = (user, loggedInStatus) => {
    this.setState({
      user,
      isLoggedIn: loggedInStatus,
    });
  };

  getUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then((response) => {
          this.setState({
            user: response.data.user,
            isLoggedIn: true,
          });
        })
        .catch((error) => {
          this.setState({
            isLoggedIn: false,
          });
        });
    }
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user, isLoggedIn } = this.state;
    return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} user={user} setUser={this.setUser} />
      <Routes>
        <Route
          exact
          path="/signup"
          element={<Signup setUser={this.setUser}/>}
        />
        <Route
          exact
          path="/login"
          element={<Login setUser={this.setUser}/>}
        />
        <Route
            exact
            path="/profile"
            render={<Profile isLoggedIn={isLoggedIn}/>}
          />
      </Routes>
    </div>
  )}
}


export default App;
