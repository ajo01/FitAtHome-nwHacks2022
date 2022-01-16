import React from "react";
import styles from "./Workout.module.css";

<<<<<<< HEAD
const Workout = ({ name, type, image, key}) => {
  const navToLoadingPage = () => {
    window.location.href = "/loading";
  };
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgDiv} onClick={navToLoadingPage}>
        <img className={styles.img} src={process.env.PUBLIC_URL + image} alt={name} />
=======
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
>>>>>>> bd252493e9df38a8eb7dadbb4efe1c686a34494f
      </div>
      <h2 className={styles.workoutName}>{name}</h2>
    </div>
  );
};

export default Workout;
