import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = {
    padding: "12px",
    boxShadow: "0 4px 8px rgba(126, 65, 65, 0.1)",
  };

  const navLinkStyle = {
    fontSize: "1.1rem",
    marginRight: "15px",
    color: "blue",
  };

  const navLinkHover = {
    color: "#f8f9fa",
    textDecoration: "underline",
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/" style={navLinkStyle}>
          Car Autoparts stor
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/UserHome" style={navLinkStyle}>
                  🏠 Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={navLinkStyle}>
                  📋 User List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/CreateUser"
                  style={navLinkStyle}
                >
                  ➕ Create User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
