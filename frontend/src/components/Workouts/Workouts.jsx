import React from "react";
import styles from "./Workouts.module.css";
import Workout from "./Workout/Workout";

import Squat from "../../images/squat.jpeg";
import Lunges from "../../images/lunge.jpeg";
import Pushup from "../../images/pushup.jpeg";
import Barbell from "../../images/barbell.jpeg";
import SideLateral from "../../images/sidelateral.jpeg";
import Superman from "../../images/superman.jpeg";

const Workouts = () => {
  const bodyPart = {
    ARM: "arm",
    LEGS: "leg",
    CHEST: "chest",
    CORE: "core",
    BACK: "back",
    SHOULDER: "shoulder",
  };
  const workoutList = [
    {
      name: "Squats",
      type: bodyPart.LEGS,
      image: <img src={<Squat />} alt="squat" />,
    },
    {
      name: "Lunges",
      type: bodyPart.LEGS,
      image: <img src={<Lunges />} alt="squat" />,
    },
    {
      name: "Barbell Bench Press",
      type: bodyPart.ARM,
      image: <img src={<Barbell />} alt="barbell" />,
    },
    {
      name: "Pushups",
      type: bodyPart.CHEST,
      image: <img src={<Pushup />} alt="squat" />,
    },
    {
      name: "Biceps curls",
      type: bodyPart.CHEST,
      image: <img src={<Squat />} alt="squat" />,
    },
    {
      name: "Situps",
      type: bodyPart.CORE,
      image: <img src={<Squat />} alt="squat" />,
    },
    {
      name: "Plank",
      type: bodyPart.CORE,
      image: <img src={<Squat />} alt="squat" />,
    },
    {
      name: "Superman",
      type: bodyPart.BACK,
      image: <img src={<Superman />} alt="squat" />,
    },
    {
      name: "One-arm dumbbell row",
      type: bodyPart.BACK,
      image: <img src={<Squat />} alt="squat" />,
    },
    {
      name: "Side Lateral Raises",
      type: bodyPart.SHOULDER,
      image: <img src={<SideLateral />} alt="squat" />,
    },
  ];

  return (
    <div className={styles.workouts}>
      <div className={styles.gridContainer}>
        {workoutList.map((workout) => (
          <Workout
            name={workout.name}
            type={workout.type}
            image={workout.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
