import React from "react";
import styles from "./Workouts.module.css";
import Workout from "./Workout/Workout";

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
      key: 0,
      name: "Squats",
      type: bodyPart.LEGS,
      image: "",
    },
    {
      key: 1,
      name: "Lunges",
      type: bodyPart.LEGS,
      image: "",
    },
    {
      key: 2,
      name: "Barbell Bench Press",
      type: bodyPart.ARM,
      image: "",
    },
    {
      key: 3,
      name: "Pushups",
      type: bodyPart.CHEST,
      image: "",
    },
    {
      key: 4,
      name: "Biceps curls",
      type: bodyPart.CHEST,
      image: "",
    },
    {
      key: 5,
      name: "Situps",
      type: bodyPart.CORE,
      image: "",
    },
    {
      key: 6,
      name: "Plank",
      type: bodyPart.CORE,
      image: "",
    },
    {
      key: 7,
      name: "Superman",
      type: bodyPart.BACK,
      image: "",
    },
    {
      key: 8,
      name: "One-arm dumbbell row",
      type: bodyPart.BACK,
      image: "",
    },
    {
      key: 9,
      name: "Side Lateral Raises",
      type: bodyPart.SHOULDER,
      image: "",
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
            key={workout.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
