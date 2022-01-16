import React from "react";
import styles from "./LoadingPage.module.css";
import PopUp from "./PopUp";
import { Webplayer } from "../Webplayer";
import PTChar from "../MainPage/img/PTChar.png"
import { ExercisePage } from "..";

const LoadingPage = () => {
    const [counter, setCounter] = React.useState(5);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

    return (
        <div className={styles.screenBackground}>
            <div className={styles.dialog}>
            {counter > 0 ? <PopUp popUpText={"Starting in " + counter + "..."}/> : <ExercisePage/>}
                <img className={styles.icon} src={PTChar}/>
            </div>
            <Webplayer />
        </div>
    );
};
export default LoadingPage;
