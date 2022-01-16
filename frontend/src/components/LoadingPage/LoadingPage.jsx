import React from "react";
import styles from "./LoadingPage.module.css";
import PopUp from "./PopUp";
import { Webplayer } from "../Webplayer";
import PTChar from "../../images/PTChar.png";
import { ExercisePage } from "..";

import { motion } from "framer-motion";
import DotLoader from "../UI/DotLoader/DotLoader";

const LoadingPage = () => {
    const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <DotLoader />
      <motion.div
        className={styles.screenBackground}
        animate={{
          opacity: [0, 0.4, 0.7, 1],
        }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.3 }}
      >
        <div className={styles.dialog}>
          {counter > 0 ? (
            <PopUp popUpText={"Starting in " + counter + "..."} />
          ) : (
            <ExercisePage />
          )}
          <img className={styles.icon} src={PTChar} />
        </div>
        <Webplayer />
      </motion.div>
    </div>
  );
};
export default LoadingPage;
