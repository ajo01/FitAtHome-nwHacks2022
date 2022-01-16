import React from "react";
import styles from "./ExercisePage.module.css";
import { useState, useEffect } from "react";
import { Webplayer } from "../Webplayer";
import PTChar from "../../images/PTChar.png";

const ExercisePage = ({ videoFeed, cnt, postureMsg }) => {
  const [borderColor, setBorderColor] = useState("green");
  const [totalReps, setTotalReps] = useState(0);
  const [totalMistakes, setTotalMistakes] = useState(0)
  const [allMistakesText, setAllMistakesText] = useState([])

  // change it to false for production
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [timeoutFunc, setTimeoutFunc] = useState(null);

  const sendMessage = (ms) => {
    if (allMistakesText.find(r => r === ms) === undefined) {
      console.log(allMistakesText)
      allMistakesText.push(ms)
      console.log(...allMistakesText)
      setAllMistakesText(...allMistakesText)
    }
    console.log(ms);
    if (ms === message) {
      return;
    }

    if (show) {
      clearTimeout(timeoutFunc);
    }

    setTotalMistakes(totalMistakes + 1)

    setShow(true);
    setMessage(ms);
    const newTimeoutFunc = setTimeout(() => {
      setShow(false);
      setTimeoutFunc(null);
      setMessage("");
    }, 3000);
    setTimeoutFunc(timeoutFunc);
  };

  const endWorkout = () => {
    window.location.href = `/report?mistake=${totalMistakes}&reps=${totalReps}&mistakeList=${encodeURIComponent(JSON.stringify({a: allMistakesText}))}`;
  };

  return (
    <div
      className={styles.exercisePage}
      style={{ backgroundColor: borderColor, display: "flex" }}
    >
      <div style={{ visibility: show ? "visible" : "hidden" }}>
        <div id={styles.alertMsg}>{message}</div>;{" "}
        <img className={styles.icon} src={PTChar} />
      </div>

      <div style={{ flexGrow: "1", margin: "20px", backgroundColor: "white" }}>
        <Webplayer setBorderColor={setBorderColor} sendMessage={sendMessage}  setTotalReps={setTotalReps} />
      </div>
      <button id={styles.endBtn} onClick={endWorkout}>
        End Workout {totalReps}
      </button>
    </div>
  );
};

export default ExercisePage;
