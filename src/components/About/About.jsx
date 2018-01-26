import React, { Component } from "react";
import zebra from "./static/zebra.png";
import "./About.css";

console.log(logo);

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>
          SJZ
        </h1>
        <img src={zebra} />
      </div>
    );
  }
}

export default About;
