import React, { useState } from "react";
import styles from "./MainPage.module.css";
import "./MainPage.css"
import MenuCard from "./MenuCard/MenuCard";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("Leg")

  return (
    <div>
      <div className={styles.mainPage}>
        <h1>MainPage</h1>
      </div>
      <div className="menu">
        <MenuCard workoutCategory="Leg" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Arm" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Chest" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Core" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Shoulder" activeTab={activeTab} setActiveTab={setActiveTab} />
        <MenuCard workoutCategory="Back" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>


  );
};

export default MainPage;
