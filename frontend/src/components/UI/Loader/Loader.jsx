import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="overlay"
      animate={{
        opacity: [1, 1, 0.8, 0],
      }}
      transition={{ duration: 2.5, ease: "easeOut" }}
    >
      <div className="position">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
