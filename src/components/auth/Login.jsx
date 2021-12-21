import React, {useState} from "react";
import authService from "../services/auth-services";
//
import "../root.css";
//
import loginTitle from "../img/Login.png";
import { useNavigate } from "react-router";

export function Login({logUser}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.login(email, password).then((res) => {
      logUser(res.data, true);
      navigate('/profile')
    }).catch((err) => {
      if (err.response.status === 403) {
        navigate("/login");
      }
    })
  };

    return (
      <div>
        <img src={loginTitle} alt="title" className="root-title" />
        <div className="root-text">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Your email here"
              value={email}
            />
            <br />
            <br />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Your password here"
              value={password}
            />
            <br />
            <br />
            <button className="root-submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
}
export default Login;
