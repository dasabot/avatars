import React from "react";
import styles from './styles.module.css';

export default function Button({onClick, buttonText}) {
    return <button type="button" onClick={onClick} className={styles.button}>{buttonText}</button>
}