import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <img className={styles["nav--icon"]} src="/src/assets/reactjs-icon.png" />
      <h3 className={styles["nav--logo-text"]}>ReactFacts</h3>
      <h4 className={styles["nav--project-text"]}>React Course-Project 1</h4>
    </nav>
  );
}
