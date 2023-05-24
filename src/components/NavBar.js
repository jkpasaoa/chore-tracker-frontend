import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="https://raw.githubusercontent.com/jkpasaoa/images/main/rm-wizard-guy.png" alt="wizard" style={{ width: "50px", height: "50px" }}></img>
        <Link to="/">Chore Wizard</Link>
      </div>
      <div className="nav-links">
        <ul className="nav-list">
          <li className="button">
            <Link to="/about">About Me</Link>
          </li>
          <li className="button">
            <Link to="/chores">View All Chores</Link>
          </li>
          <li className="button">
            <Link to="/chores/new">Add New Chore</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
