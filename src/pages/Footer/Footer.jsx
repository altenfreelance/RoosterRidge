import React, { Component } from "react";
import SocialIcons from "./SocialIcons";


export default class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto"
        style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          height: '3rem',
          right: '0'
        }}>
        <SocialIcons />
      </footer>
    );
  }
}
