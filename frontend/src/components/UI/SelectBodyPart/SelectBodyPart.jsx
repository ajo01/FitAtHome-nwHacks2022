import React, { useState } from "react";
import styles from "./SelectBodyPart.module.css";
import MenuCard from "./MenuCard/MenuCard";

import { motion } from "framer-motion";
const SelectBodyPart = ({ type, setType }) => {
  return (
    <motion.div
      className={styles.selectContainer}
      animate={{
        opacity: [0, 0.4, 0.7, 1],
      }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
    >
      <div className="menu">
        <MenuCard
          workoutCategory="Arm"
          activeTab={type}
          setActiveTab={setType}
        />
        <MenuCard
          workoutCategory="Leg"
          activeTab={type}
          setActiveTab={setType}
        />
        <MenuCard
          workoutCategory="Chest"
          activeTab={type}
          setActiveTab={setType}
        />
        <MenuCard
          workoutCategory="Core"
          activeTab={type}
          setActiveTab={setType}
        />
        <MenuCard
          workoutCategory="Shoulder"
          activeTab={type}
          setActiveTab={setType}
        />
        <MenuCard
          workoutCategory="Back"
          activeTab={type}
          setActiveTab={setType}
        />
      </div>
    </motion.div>
  );
};

export default SelectBodyPart;
