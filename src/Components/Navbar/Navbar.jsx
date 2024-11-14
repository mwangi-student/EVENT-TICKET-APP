import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const logoPath = "/images/Logo.png"; // Ensure the logo path is correct

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logoPath} alt="Logo" className="navbar-logo" />
      </div>

      <nav className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">ALL EVENTS</Link>
          </li>
          <li>
            <Link to="/addTicket">ADD EVENTS</Link>
          </li>
        </ul>
      </nav>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </header>
  );
}

export default Navbar;
