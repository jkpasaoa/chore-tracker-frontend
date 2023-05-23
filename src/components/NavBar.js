import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Chore Wizard</Link>
      </div>
      <div className="nav-links">
        <ul className="nav-list">
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
