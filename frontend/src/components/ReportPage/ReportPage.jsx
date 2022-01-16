import React from "react";
import styles from "./ReportPage.module.css";

const ReportPage = () => {
  const navExercise = () => {
    window.location.href = "/exercise";
  };
  const navHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.reportContainer}>
      <h1 id={styles.h1}>Workout Summary</h1>
      <div id={styles.modal}>
        <button
          className={styles.reportBtn}
          id={styles.resumeBtn}
          onClick={navExercise}
        >
          Resume Workout
        </button>

        <button
          className={styles.reportBtn}
          id={styles.backBtn}
          onClick={navHome}
        >
          Back to Main Menu
        </button>
      </div>
    </div>
  );
};

export default ReportPage;
