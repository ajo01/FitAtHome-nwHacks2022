import React from "react";
import styles from "./ReportPage.module.css";
import Check from "../../images/check.png";
import Clock from "../../images/schedule.png";
import Warning from "../../images/report_problem.png";
import Title from "../../images/WorkoutSummary.png";

const ReportPage = ({ correctPercentage, repNum, problems }) => {
  const navExercise = () => {
    window.location.href = "/exercise";
  };
  const navHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.reportContainer}>
      <img className={styles.title} src={Title} alt="summary title" />
      <div id={styles.modal}>
        <div className={styles.inline}>
          <img className={styles.icons} src={Check} alt="check img" />
          <div className={styles.text}>Percentage of correct form</div>
          <div className={styles.rightAlign}>94%</div>
        </div>
        <div className={styles.border} />
        <div className={styles.inline}>
          <img className={styles.icons} src={Clock} alt="clock img" />
          <div className={styles.text}>Rep number</div>
          <div className={styles.rightAlign}>3</div>
        </div>
        <div className={styles.border} />
        <div className={styles.inline}>
          <img className={styles.icons} src={Warning} alt="warning img" />
          <div className={styles.text}>Most common problems:</div>
          <div id={styles.problemList}>
            <ol>
              <li>Curved Back</li>
              <li>Knees</li>
              <li>Legs are not bent enough</li>
            </ol>
          </div>
        </div>
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
