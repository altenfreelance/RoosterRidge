import React, { Component } from "react";
import SocialIcons from "./SocialIcons";


export default class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto"
        style={{
          backgroundColor: 'rgba(128,0,0, 0.8)',
          position: 'absolute',
          bottom: '0',
          left: '0',
          hieght: '2.5rem',
          right: '0'
        }}>
        <SocialIcons />
      </footer>
    );
  }
}
