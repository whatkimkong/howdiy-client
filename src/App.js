import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router";
import Signup from "./components/Signup";
import Login from "./components/Login";
import authService from "./components/services/auth-services";

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
    return (
    <div className="App">
      <Switch>
        <Signup />
        <Route
          exact
          path="/signup"
          render={() => <Signup setUser={this.setUser} />}
        />
        <Route
          exact
          path="/login"
          render={() => <Login setUser={this.setUser} />}
        />
      </Switch>
    </div>
  )}
}


export default App;
