import React from "react";
import styles from "./MainPage.module.css";
import Workouts from "../Workouts/Workouts";
import SelectBodyPart from "../UI/SelectBodyPart/SelectBodyPart";
import PTChar from "./img/PTChar.png"
const MainPage = () => {

  return (
    <div className={styles.mainPage}>
      <div className={styles.headerSection}>
        <div className={styles.header}>
          <h1 className={styles.mainHeader}>Exercise Selection</h1>
          <h2 className={styles.subHeader}>Choose a workout</h2>
        </div>
          <img className={styles.icon} src={PTChar}/>
      </div>
      <div className={styles.mainContent}>
        <SelectBodyPart />
        <Workouts className={styles.workoutSection} />
      </div>
    </div>


  );
};

export default MainPage;
