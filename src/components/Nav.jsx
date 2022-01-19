import React from "react";
import Account from "./Account ";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="index.html" className="brand">
            <img
              src={
                "https://res.cloudinary.com/abidazad/image/upload/v1640542528/Vector_uslonh.png"
              }
              alt="Learn with Sumit Logo"
            />
            <h3>azad</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
