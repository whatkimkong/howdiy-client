import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import title from "./img/howdiyGreen.png";
import allCategories from './img/ROUGHshot.png';

export class Home extends Component {
  render() {
    return (
      <div>
        <img src={title} alt="title" className="title title-img" />
        <h3 className="root-text">DIY straight from your Pantry</h3>
        <p className="root-text"> 6 Categories to choose from:</p>
        <img src={allCategories} alt="little-representatives" width="300px" height="190px"/>
        <div className="root-text">
        <br/>
        <p>
          Join our community of DIY lovers who have plenty ideas on how to use
          the ingredients all around us to create fun useful homemade products!
          <br /> Find out more about what drives us:
        </p>
        </div>
        <br/>
        <NavLink className="root-submit" to="/join">To the Join !!</NavLink>
        <p className="root-text">Go on, bet grandma even had some of that wise wise wisdoms....</p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Home;
