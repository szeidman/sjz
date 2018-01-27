import React, { Component } from "react";
import "./About.css";


class About extends Component {
  render() {
    return (
      <div className="about" style={{ color: 'lightblue'}}>
        <h1>
          moi
        </h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet augue commodo, condimentum eros non, elementum erat. Vivamus ultrices viverra sem a aliquam. Vestibulum laoreet nisi ac augue sodales vehicula. Donec sed lacus non orci tincidunt posuere a quis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas pulvinar a turpis a consequat. Nam interdum sem eget lorem euismod ultrices. Quisque non lacus viverra, condimentum lorem vitae, aliquam mauris. Etiam non mauris et turpis consequat interdum sit amet ut orci. Cras ut est ut magna viverra commodo ut at massa. Maecenas vel erat cursus orci interdum euismod.</h3>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    );
  }
}

export default About;
