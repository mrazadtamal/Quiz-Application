import classes from "../styles/Nav.module.css";
import Account from "./Account";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            {/* <img src={""} alt="Learn with Sumit Logo" /> */}
            <h3>azad</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
