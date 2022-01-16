import React from "react";
import styles from "./Workouts.module.css";
import Workout from "./Workout/Workout";

import { motion } from "framer-motion";
const Workouts = ({ type }) => {
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
      image: "/workouticons/Legs/Squats.png",
    },
    {
      key: 1,
      name: "Calf Raises",
      type: bodyPart.LEGS,
      image: "/workouticons/Legs/CalfRaises.png",
    },
    {
      key: 2,
      name: "Side Leg Raises",
      type: bodyPart.LEGS,
      image: "/workouticons/Legs/SideLegRaises.png",
    },
    {
      key: 3,
      name: "Lunges",
      type: bodyPart.LEGS,
      image: "/workouticons/Legs/Lunges.png",
    },
    {
      key: 4,
      name: "Lateral Raises",
      type: bodyPart.ARM,
      image: "/workouticons/Arm/lateralRaises.png",
    },
    {
      key: 5,
      name: "Raised arm circles",
      type: bodyPart.ARM,
      image: "/workouticons/Arm/RaisedArmCircles.png",
    },
    {
      key: 6,
      name: "Shoulder Taps",
      type: bodyPart.ARM,
      image: "/workouticons/Arm/ShoulderTaps.png",
    },
    {
      key: 7,
      name: "Side Bicep Extensions",
      type: bodyPart.ARM,
      image: "/workouticons/Arm/SideBicepExtensions.png",
    },
    {
      key: 8,
      name: "Push up",
      type: bodyPart.CHEST,
      image: "/workouticons/Chest/pushUps.png",
    },
    {
      key: 9,
      name: "Plank Rotations",
      type: bodyPart.CHEST,
      image: "/workouticons/Chest/PlankRotations.png",
    },
    {
      key: 10,
      name: "Chest Expansions",
      type: bodyPart.CHEST,
      image: "/workouticons/Chest/chestExpansions.png",
    },
    {
      key: 11,
      name: "Upward Downward Dog",
      type: bodyPart.CHEST,
      image: "/workouticons/Chest/upwardDownwardDog.png",
    },
    {
      key: 12,
      name: "Climbers",
      type: bodyPart.CORE,
      image: "/workouticons/core/climbers.png",
    },
    {
      key: 13,
      name: "Sitting Twists",
      type: bodyPart.CORE,
      image: "/workouticons/core/SittingTwists.png",
    },
    {
      key: 14,
      name: "Side Bridges",
      type: bodyPart.CORE,
      image: "/workouticons/core/sideBridges.png",
    },
    {
      key: 15,
      name: "Planks",
      type: bodyPart.CORE,
      image: "/workouticons/core/planks.png",
    },
    {
      key: 16,
      name: "ArmChops",
      type: bodyPart.SHOULDER,
      image: "/workouticons/Shoulder/ArmChops.png",
    },
    {
      key: 17,
      name: "Arm Scissors",
      type: bodyPart.SHOULDER,
      image: "/workouticons/Shoulder/ArmScissors.png",
    },
    {
      key: 18,
      name: "RaisedArmHold",
      type: bodyPart.SHOULDER,
      image: "/workouticons/Shoulder/RaisedArmHold.png",
    },
    {
      key: 19,
      name: "SideArmRaises",
      type: bodyPart.SHOULDER,
      image: "/workouticons/Shoulder/sideArmRaises.png",
    },
    {
      key: 19,
      name: "Back Arches",
      type: bodyPart.BACK,
      image: "/workouticons/Back/backArches.png",
    },
    {
      key: 19,
      name: "ReverseAngels",
      type: bodyPart.BACK,
      image: "/workouticons/Back/ReverseAngels.png",
    },
    {
      key: 19,
      name: "Swimmers",
      type: bodyPart.BACK,
      image: "/workouticons/Back/swimmers.png",
    },
    {
      key: 19,
      name: "W-extensions",
      type: bodyPart.BACK,
      image: "/workouticons/Back/W-extensions.png",
    },
  ];

  console.log({ workoutList, type });

  return (
    <motion.div
      className={styles.workouts}
      animate={{
        opacity: [0, 0.4, 0.7, 1],
      }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
    >
      <div className={styles.gridContainer}>
        {workoutList
          .filter((workout) => workout.type === type.toLowerCase())
          .map((workout) => (
            <Workout
              name={workout.name}
              type={workout.type}
              image={workout.image}
              key={workout.name}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default Workouts;
