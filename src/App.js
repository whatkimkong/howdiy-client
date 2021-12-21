import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const logUser = (user, loggedInStatus) => {
    setUser(user);
    setIsLoggedIn(loggedInStatus);
  };

  function getUser() {
    if (user === null) {
      authService
        .loggedin()
        .then((res) => {
          setUser(res.data.user);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          setIsLoggedIn(false);
        });
    }
  }

  useEffect(() => {
    getUser();
  });

  return (
    <div className="App">
      <NavbarComponent isLoggedIn={isLoggedIn} user={user} logUser={logUser} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/join" element={<Join user={user} />} />
        <Route path="/signup" element={<Signup logUser={logUser} />} />
        <Route path="/login" element={<Login logUser={logUser} />} />
        <Route
          path="/profile"
          element={<Profile isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route
          path="/categories"
          element={<Categories isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/:category/howdiy" // where they are receiving the request to visit - are they trying to get to ...
          element={<CategoryList />}
        />
        <Route path="/howdiy/create" element={<HowdiyCreate />} />
        <Route path="/howdiy/:id" element={<Howdiy user={user} />} />
        <Route path="/howdiy/edit/:id" element={<HowdiyEdit />} />
      </Routes>
    </div>
  );
}

export default App;
