import React from "react";
import { NavLink } from "react-router-dom";

export default function NavHeader() {
  return (
    <header className="sticky-top masthead px-3 py-2">
      <nav className="nav-masthead">
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>
        <NavLink to="/shows" className={({ isActive }) => isActive ? "active" : ""}>
          Shows
        </NavLink>
        <NavLink to="/members" className={({ isActive }) => isActive ? "active" : ""}>
          Members
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
        <NavLink to="/music" className={({ isActive }) => isActive ? "active" : ""}>
          Music
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
          Gallery
        </NavLink>
      </nav>
    </header>
  );
}
