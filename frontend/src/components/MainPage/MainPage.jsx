import React from "react";
import styles from "./MainPage.module.css";
import Workouts from "../Workouts/Workouts";
import SelectBodyPart from "../UI/SelectBodyPart/SelectBodyPart";

const MainPage = () => {

  return (
    <div className={styles.mainPage}>
      <div className={styles.header}>
        <h1>Exercise Selection</h1>
        <h2>Choose a workout</h2>
      </div>
      <div style={{ height: "30px", width: "100%" }} />
      <SelectBodyPart />
      <Workouts className={styles.workoutSection} />
    </div>


  );
};

export default MainPage;
