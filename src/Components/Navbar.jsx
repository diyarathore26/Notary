import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Notary</Link>
      </div>

      {/* Hamburger Button*/}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>

        {/* Practice Areas Dropdown */}
        <li
          className="nav-item dropdown"
          onMouseEnter={() => setHoverDropdown(true)}
          onMouseLeave={() => setHoverDropdown(false)}
        >
          <NavLink to="/practice-areas" className="nav-item">
            Practice Areas ▾
          </NavLink>

          {hoverDropdown && (
            <ul className="dropdown-menu">
              <li>Bankruptcy Law</li>
              <li>Business Law</li>
              <li>Civil Rights Law</li>
              <li>Criminal Law</li>
              <li>Immigration Law</li>
              <li>Property Law</li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/testimonials"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
