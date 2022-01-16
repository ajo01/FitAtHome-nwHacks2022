import React from "react";
import "./DotLoader.css";
import { motion } from "framer-motion";

const DotLoader = () => {
  return (
    <motion.div
      className="dot-overlay"
      animate={{
        opacity: [1, 1, 0.8, 0],
      }}
      transition={{ duration: 2.5, ease: "easeOut" }}
    >
      <div id="position">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default DotLoader;
