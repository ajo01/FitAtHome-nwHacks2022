import React from "react";
import styles from "./PopUp.module.css";

const PopUp = ({popUpText}) => {
    return (
        <div>
            <p className={styles.textBox}>{popUpText}</p>
        </div>
    );
};
export default PopUp;