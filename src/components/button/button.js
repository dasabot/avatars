import React from "react";
import styles from "./styles.module.css";

export default function Button({ onClick, buttonText, extraClass }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${extraClass ? extraClass : ""}`}
    >
      {buttonText}
    </button>
  );
}
