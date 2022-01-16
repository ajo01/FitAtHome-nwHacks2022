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
      // image: "./workouticons/Legs/Squats.png",
    },
    {
      key: 1,
      name: "Lunges",
      type: bodyPart.LEGS,
      image: "",
    },
    {
      key: 2,
      name: "Cross Leg Swings",
      type: bodyPart.LEGS,
      image: "",
    },
    {
      key: 3,
      name: "Calf Raises",
      type: bodyPart.LEGS,
      image: "",
    },
    {
      key: 4,
      name: "",
      type: bodyPart.ARM,
      image: "",
    },
    {
      key: 5,
      name: "Raised arm circles",
      type: bodyPart.ARM,
      image: "",
    },
    {
      key: 6,
      name: "Bicep Extensions",
      type: bodyPart.ARM,
      image: "",
    },
    {
      key: 7,
      name: "Side Bicep Extensions",
      type: bodyPart.ARM,
      image: "",
    },
    {
      key: 8,
      name: "Push up",
      type: bodyPart.CHEST,
      image: "",
    },
    {
      key: 9,
      name: "Plank Rotations",
      type: bodyPart.CHEST,
      image: "",
    },
    {
      key: 10,
      name: "Shoulder Taps",
      type: bodyPart.CHEST,
      image: "",
    },
    {
      key: 11,
      name: "Inch Worms",
      type: bodyPart.CHEST,
      image: "",
    },
    {
      key: 12,
      name: "Crunches",
      type: bodyPart.CORE,
      image: "",
    },
    {
      key: 13,
      name: "Situps",
      type: bodyPart.CORE,
      image: "",
    },
    {
      key: 14,
      name: "Planks",
      type: bodyPart.CORE,
      image: "",
    },
    {
      key: 15,
      name: "Scissors",
      type: bodyPart.CORE,
      image: "",
    },
    {
      key: 16,
      name: "Dumbbell Shrug",
      type: bodyPart.SHOULDER,
      image: "",
    },
    {
      key: 17,
      name: "Shoulder Press",
      type: bodyPart.SHOULDER,
      image: "",
    },
    {
      key: 18,
      name: "Side Arm Raises",
      type: bodyPart.SHOULDER,
      image: "",
    },
    {
      key: 19,
      name: "Pike Press",
      type: bodyPart.SHOULDER,
      image: "",
    },
    {
      key: 19,
      name: "Diver Push Up",
      type: bodyPart.BACK,
      image: "",
    },
    {
      key: 19,
      name: "Wall Arm Slides",
      type: bodyPart.BACK,
      image: "",
    },
    {
      key: 19,
      name: "Lawn mower",
      type: bodyPart.BACK,
      image: "",
    },
    {
      key: 19,
      name: "Forward bends",
      type: bodyPart.BACK,
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
