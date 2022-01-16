import React, { useState } from "react";
import styles from "./SelectBodyPart.module.css";
import MenuCard from "./MenuCard/MenuCard";

const SelectBodyPart = ({type, setType}) => {

  return(
  <div className={styles.selectContainer}>
          <div className="menu">
        <MenuCard workoutCategory="Leg" activeTab={type} setActiveTab={setType} />
        <MenuCard workoutCategory="Arm" activeTab={type} setActiveTab={setType} />
        <MenuCard workoutCategory="Chest" activeTab={type} setActiveTab={setType} />
        <MenuCard workoutCategory="Core" activeTab={type} setActiveTab={setType} />
        <MenuCard workoutCategory="Shoulder" activeTab={type} setActiveTab={setType} />
        <MenuCard workoutCategory="Back" activeTab={type} setActiveTab={setType} />
      </div>
  </div>);
};

export default SelectBodyPart;
