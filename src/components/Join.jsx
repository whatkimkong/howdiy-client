import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import title from "./img/Join.png";
import faceLogo from "./img/Face-dark.png";
import "./root.css";
//import bodyLogo from "./img/Body-icon.png";
import houseLogo from "./img/House-dark.png";
import playLogo from "./img/Play-dark.png";
//import foodLogo from "./img/Food-icon.png";
//import drinkLogo from "./img/Drink-icon.png";

export class Join extends Component {
  render() {
    return (
      <div>
        <img src={title} alt="title" className="root-title" />
        <div className="root-text">
          <h5>
            HOWDiy is an app where like-minded people can come from far and wide
            to share their favorite DIY recipes in the categories of <br />{" "}
            cleaning - play - food - drink - bodycare - facecare in fresh new
            ways.
            <br />
            <img
              className="root-img-styles"
              src={houseLogo}
              alt="join-saloon"
            />
          </h5>
          <h5>
            Aggressive chemical cleaning agents, hidden baddies in cosmetics and
            toys pumped full of substances that are no use to anyone: with
            simple home remedies you can make the most amazing things yourself.
            <br />
            <img className="root-img-styles" src={playLogo} alt="join-play" />
            <br />
          </h5>
          <h5>
            {" "}
            You save plastic waste and money too - and protect your health and
            the environment at the same time. Let's share knowledge about great
            "recipes" that make us feel proud to make or proud to reduce our
            waste and become part of this Howdiy movement. <br />
            <img className="root-img-styles" src={faceLogo} alt="join-face" />
            <br />
          </h5>
          <h5>
            To sign up and join our savvy community who see Oranges suffer a
            plottwist into floorcleaners or the resourcefulness of the many ways
            to Play and Paint on and with flour Dough, click just here: Look how
            easy: I've given you a magic button and i haven't even been paid
            me'h supposed magic bean!
          </h5>
        </div>
        <br />
        <NavLink className="root-submit" to="/signup">
          PPSSSSTTTT Over 'ere!
        </NavLink>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Join;
