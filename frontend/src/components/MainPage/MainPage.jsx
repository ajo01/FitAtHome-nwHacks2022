import React, { useState } from "react";
import styles from "./MainPage.module.css";
import Workouts from "../Workouts/Workouts";
import SelectBodyPart from "../UI/SelectBodyPart/SelectBodyPart";
import PTChar from "../../images/PTChar.png";

import { motion } from "framer-motion";
const MainPage = () => {
  const [type, setType] = useState("Arm");

  return (
    <div className={styles.mainPage}>
      <motion.div
        className={styles.headerSection}
        animate={{
          opacity: [0, 0.4, 0.7, 1],
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className={styles.header}>
          <h1 className={styles.mainHeader}>Exercise Selection</h1>
          <h2 className={styles.subHeader}>Choose a workout</h2>
        </div>
        <img className={styles.icon} src={PTChar} />
      </motion.div>
      <div className={styles.mainContent}>
        <SelectBodyPart type={type} setType={setType} />
        <Workouts
          type={type}
          setType={setType}
          className={styles.workoutSection}
        />
      </div>
    </div>
  );
};

export default MainPage;
