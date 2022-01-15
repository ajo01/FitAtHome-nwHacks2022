import React from "react";
import styles from "./Workout.module.css";

const Workout = ({ name, type, image }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgDiv}>{image}</div> */}
      <h2>{name}</h2>
    </div>
  );
};

export default Workout;
