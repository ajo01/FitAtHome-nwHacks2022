import React from "react";
import styles from "./Workout.module.css";

const Workout = ({ name, type, image, key }) => {
  const navToExercisePage = () => {
    window.location.href = "/exercise";
  };
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgDiv} onClick={navToExercisePage}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + image}
          alt={name}
        />
      </div>
      <h2 className={styles.workoutName}>{name}</h2>
    </div>
  );
};

export default Workout;
