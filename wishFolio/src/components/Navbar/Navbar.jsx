import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHouse,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div>WishFolio</div>
      <div>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink to="/wish-list">
          <FontAwesomeIcon icon={faScroll} />
        </NavLink>
        <NavLink to="/my-profile">
          <FontAwesomeIcon icon={faCircleUser} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
