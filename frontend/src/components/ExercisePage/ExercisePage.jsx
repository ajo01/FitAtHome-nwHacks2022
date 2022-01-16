import React from "react";
import styles from "./ExercisePage.module.css";
import { useState, useEffect } from "react";
import { Webplayer } from "../Webplayer";

const ExercisePage = ({ videoFeed, cnt, postureMsg }) => {

  const [color, setColor] = useState("red")

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
    // reminder! replace with msg later
    return <div id={styles.alertMsg}>Great job! Keep going.</div>;
  };

  const endWorkout = () => {
    console.log("end workout"); //redirect to screen 4
  };

  return (
    <div className={styles.exercisePage}>

{/* <div style={{border: "10px solid "}} className={styles.exercisePage}> */}
      {MessagePopUp()}
      <div id={styles.left} />
      <div id={styles.right} />
      <div id={styles.top} />
      <div id={styles.bottom} /> 

      <Webplayer />
      <button id={styles.endBtn} onClick={endWorkout}>
        End Workout
      </button>
    </div>
  );
};

export default ExercisePage;
