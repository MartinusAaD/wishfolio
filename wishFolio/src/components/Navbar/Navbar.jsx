import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHouse,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import CircularButton from "../CircularButton/CircularButton";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <NavLink to="/" className={styles.logoLink}>
            <h1 className={styles.logoTitle}>WishFolio</h1>
          </NavLink>
        </div>
        <div className={styles.linksContainer}>
          <CircularButton urlPath={"/"} icon={faHouse} />
          <CircularButton urlPath={"/wish-list"} icon={faScroll} />
          <CircularButton urlPath={"/my-profile"} icon={faCircleUser} />
        </div>

        <div className={styles.signInOutContainer}>
          <NavLink to="/sign-in" className={styles.signInOutLink}>
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
