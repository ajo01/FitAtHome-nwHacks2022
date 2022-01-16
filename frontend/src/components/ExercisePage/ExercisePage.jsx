import React from "react";
import styles from "./ExercisePage.module.css";
import { useState, useEffect } from "react";

const ExercisePage = ({ videoFeed, cnt, postureMsg }) => {
  // change it to false for production
  const [show, setShow] = useState(true);
  const [playSound, setPlaySound] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const MessagePopUp = () => {
    // if (!setShow) return null;
    return <div id={styles.alertMsg}>Great job! Keep going.</div>;
  };

  const endWorkout = () => {
    console.log("end workout");
  };

  return (
    <div className={styles.exercisePage}>
      {MessagePopUp()}
      <div id={styles.left} />
      <div id={styles.right} />
      <div id={styles.top} />
      <div id={styles.bottom} />
      <img
        className={styles.videoContainer}
        src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/running_at_sunset-1296x728-header.jpg?w=1155&h=1528"
        alt="videofeed"
      />
      <button id={styles.endBtn} onClick={endWorkout}>
        End Workout
      </button>
    </div>
  );
};

export default ExercisePage;
