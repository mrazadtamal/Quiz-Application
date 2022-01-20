import React from "react";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
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
