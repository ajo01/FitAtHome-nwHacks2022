import React from "react";
import './MenuCard.css';

const MenuCard = ({activeTab, workoutCategory, setActiveTab}) => {
    return(
        <div>

        <button className={`button ${activeTab === workoutCategory ? "open" : ""}`} onClick={() => setActiveTab(workoutCategory)}>
            <div className="menuCardWrapper" />
            <div className="menuCard">
                <p>{workoutCategory}</p>
            </div>
        </button>
        </div>
    );
}

export default MenuCard;
