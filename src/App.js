import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
// auth
import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";
import Signup from "./components/auth/Signup";
import authService from "./components/services/auth-services";
//
import Home from "./components/Home";
import Join from "./components/Join";
import NavbarComponent from "./components/NavbarComponent";
//
import Categories from "./components/categories/Categories";
import CategoryList from "./components/categories/CategoryList";
//
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
        <NavbarComponent isLoggedIn={isLoggedIn} user={user} setUser={this.setUser} />

        <Switch>
        <Route
            exact path="/"
            render={(props) => <Home {...props}/>}
          />
          <Route
            exact path="/join"
            render={(props) => <Join {...props}/>}
          />
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
            render={(props) => <HowdiyCreate {...props} />}
          />
          <Route
            exact
            path="/howdiy/:id"
            render={(props) => <Howdiy {...props} user={user}/>}
          />
          <Route
            path="/howdiy/edit/:id"
            render={(props) => <HowdiyEdit {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
