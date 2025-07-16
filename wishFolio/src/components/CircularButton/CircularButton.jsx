import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CircularButton.module.css";
import { NavLink } from "react-router-dom";

const CircularButton = ({ urlPath, icon }) => {
  return (
    <NavLink to={urlPath} className={styles.circularLinkButton}>
      <FontAwesomeIcon icon={icon} className={styles.linkIcon} />
    </NavLink>
  );
};

export default CircularButton;
