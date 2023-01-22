import React from "react";
import styles from './styles.module.css';


export default function AddAvatarBtn({onClickFunction, disabled}) {

    return <button disabled={disabled} type="button" onClick={onClickFunction} className={styles.button}>
        <svg  width="80" height="80" viewBox="0 0 80 80">
            <line x1="42" y1="8.74228e-08" x2="42" y2="80" stroke="#5E217A" stroke-width="4" />
            <line x1="-1.74846e-07" y1="38" x2="80" y2="38" stroke="#5E217A" stroke-width="4" />
        </svg>
    </button>
}