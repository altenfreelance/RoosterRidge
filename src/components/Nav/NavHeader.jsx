import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavHeader extends Component {
  render() {
    return (
      <header className="sticky-top masthead rounded px-3 py-2">
        <div className="inner">
          {/* <h3 style={{fontFamily: 'serif', textTransform: 'title'}} className="masthead-brand">Rooster Ridge</h3> */}
          <nav className="nav nav-masthead justify-content-center">
            <NavLink to="/about" activeClassName="active" replace>
              About
            </NavLink>
            <NavLink to="/shows" activeClassName="active" replace>
              Shows
            </NavLink>
            <NavLink to="/members" activeClassName="active" replace>
              Members
            </NavLink>
            <NavLink to="/contact" activeClassName="active" replace>
              Contact
            </NavLink>
            <NavLink to="/music" activeClassName="active" replace>
              Music
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
