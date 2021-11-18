import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import authService from "./components/services/auth-services";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Categories from "./components/categories/Categories";
import CategoryList from "./components/categories/CategoryList";
import HowdiyCreate from "./components/howdiys/HowdiyCreate";
import Howdiy from "./components/howdiys/Howdiy";
import HowdiyEdit from "./components/howdiys/HowdiyEdit";

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

        <Switch>
          <Route
            path="/signup"
            render={(props) => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} setUser={this.setUser} />}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Profile {...props} isLoggedIn={isLoggedIn} user={user} />
            )}
          />
          <Route
            path="/categories"
            render={(props) => (
              <Categories {...props} isLoggedIn={isLoggedIn} />
            )}
          />
          <Route
            path="/:category/howdiy" // where they are receiving the request to visit - are they trying to get to ...
            render={(props) => <CategoryList {...props} />}
          />
          <Route
            path="/howdiy/create"
            render={(props) => (
              <HowdiyCreate {...props} />
            )}
          />
          <Route
            path="/howdiy/:id"
            render={(props) => (
              <Howdiy {...props} />
            )}
          />
          <Route
            path="/howdiy/edit/:id"
            render={(props) => (
              <HowdiyEdit {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
