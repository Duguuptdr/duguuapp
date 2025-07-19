import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-do">
      <nav className="navbar">
        <div className="logo">
          <span id="MyColor">My</span>.Portfolio
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/tech">Tech</Link></li>
          <li><Link to="/extracurricular">Extracurricular</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
