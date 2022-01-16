import React from "react";
import styles from "./ExercisePage.module.css";
import { useState } from "react";
import { Webplayer } from "../Webplayer";
import PTChar from "../../images/PTChar.png";

function usePushToText(init) {
  const [arr, setArr] = useState(init)
  const addText = (cur) => {
    setArr(arr + "~~" + cur)
  }
  return [arr, addText]
}

const ExercisePage = ({ videoFeed, cnt, postureMsg }) => {
  const [borderColor, setBorderColor] = useState("green");
  const [totalReps, setTotalReps] = useState(0);
  const [totalMistakes, setTotalMistakes] = useState(0)
  const [totalMessage, setTotalMessage] = useState("")

  // change it to false for production
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [timeoutFunc, setTimeoutFunc] = useState(null);

  function sendMessage(ms) {
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
    setTimeoutFunc(newTimeoutFunc);
  };

  const endWorkout = () => {
    window.location.href = `/report?mistake=${totalMistakes}&reps=${totalReps}&mistakeList=${totalMessage}`;
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
        <Webplayer setBorderColor={setBorderColor} sendMessage={sendMessage}  setTotalReps={setTotalReps} setTotalMessage={setTotalMessage} />
      </div>
      <button id={styles.endBtn} onClick={endWorkout}>
        End Workout
      </button>
    </div>
  );
};

export default ExercisePage;
