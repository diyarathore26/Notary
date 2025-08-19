import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [hoverDropdown, setHoverDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Notary</Link>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>

        {/* Practice Areas Dropdown */}
        <li
          className="nav-item dropdown"
          onMouseEnter={() => setHoverDropdown(true)}
          onMouseLeave={() => setHoverDropdown(false)}
        >
          {/* Clicking this goes to /practice-areas */}
          <NavLink to="/practice-areas" className="nav-item">
            Practice Areas ▾
          </NavLink>

          {/* Dropdown appears on hover */}
          {hoverDropdown && (
            <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
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
          <NavLink to="/testimonials" className="nav-item">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
