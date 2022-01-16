import React from "react";
import styles from "./ReportPage.module.css";
import Check from "../../images/check.png";
import Clock from "../../images/schedule.png";
import Warning from "../../images/report_problem.png";
import Title from "../../images/WorkoutSummary.png";
import { motion } from "framer-motion";

const ReportPage = ({ correctPercentage, repNum, problems }) => {
  const navExercise = () => {
    window.location.href = "/exercise";
  };
  const navHome = () => {
    window.location.href = "/";
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const { mistake, reps, mistakeList } = Object.fromEntries(
    urlSearchParams.entries()
  );


  return (
    <div className={styles.reportContainer}>
      <motion.img
        animate={{
          opacity: [0, 0.4, 0.7, 1],
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles.title}
        src={Title}
        alt="summary title"
      />
      <motion.div
        id={styles.modal}
        animate={{
          opacity: [0, 0.4, 0.7, 1],
        }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className={styles.inline} id={styles.firstInline}>
          <img className={styles.icons} src={Check} alt="check img" />
          <div className={styles.text}>Total Mistakes</div>
          <div className={styles.rightAlign}>{mistake}</div>
        </div>
        <div className={styles.border} />
        <div className={styles.inline}>
          <img className={styles.icons} src={Clock} alt="clock img" />
          <div className={styles.text}>Total Reps</div>
          <div className={styles.rightAlign}>{reps}</div>
        </div>
        <div className={styles.border} />
        <div className={styles.inline}>
          <img className={styles.icons} src={Warning} alt="warning img" />
          <div className={styles.text}>How to Improve</div>
          <div id={styles.problemList}>
            <ol>
              {mistakeList.substring(2).split("~~").map(r => (
                <li>{r}</li>
              ))}
            </ol>
          </div>
        </div>
        <motion.button
          className={styles.reportBtn}
          id={styles.resumeBtn}
          onClick={navExercise}
          animate={{
            opacity: [0, 0.4, 0.7, 1],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Resume Workout
        </motion.button>

        <motion.button
          className={styles.reportBtn}
          id={styles.backBtn}
          onClick={navHome}
          animate={{
            opacity: [0, 0.4, 0.7, 1],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Back to Main Menu
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ReportPage;
