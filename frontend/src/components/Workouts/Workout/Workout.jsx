import React from "react";
import styles from "./Workout.module.css";

const Workout = ({ name, type, image }) => {
  const navToExercisePage = () => {
    window.location.href = "/exercise";
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgDiv} onClick={navToExercisePage}>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Workout;
