import React, { Component } from "react";
import title from "./img/howdiyGreen.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <img src={title} alt="title" className="title" />
        <h3>DIY straight from your Pantry</h3>
        <p>6 Categories to choose from:</p>
        <h1>little representative icons?</h1>
        <p>
          Join our community of DIY lovers who have plenty ideas on how to use
          the ingredients all around us to create fun useful homemade products!{" "}
          <br /> Find out more about what drives us:
        </p>
        <button> to the Join!</button>
      </div>
    );
  }
}

export default Home;
