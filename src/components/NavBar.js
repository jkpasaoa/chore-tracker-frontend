import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <ul>
          <li className="logo">
            <Link to="/">Chore Wizard</Link>
          </li>
          <li>
            <Link to="/chores">View All Chores</Link>
          </li>
          <li className="add-new-chore">
            <Link to="/chores/new">Add New Chore</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
