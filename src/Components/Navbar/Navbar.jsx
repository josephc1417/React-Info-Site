import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <img class="nav--icon" src="/src/assets/reactjs-icon.png" />
      <h3 class="nav--iconText">ReactFacts</h3>
      <h4 class="nav--project">React Course-Project 1</h4>
    </nav>
  );
}
