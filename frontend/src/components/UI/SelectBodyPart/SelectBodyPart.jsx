import React, { useState } from "react";
import styles from "./SelectBodyPart.module.css";
import MenuCard from "./MenuCard/MenuCard";

const SelectBodyPart = () => {
  const [activeTab, setActiveTab] = useState("Leg")

  return(
  <div className={styles.selectContainer}>
          <div className="menu">
        <MenuCard workoutCategory="Leg" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Arm" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Chest" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Core" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Shoulder" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Back" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
  </div>);
};

export default SelectBodyPart;
