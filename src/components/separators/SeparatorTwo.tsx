import React from "react";
import { SeparatorStraigth } from "@assets/svgs/SeparatorStraigth";
import { motion } from "framer-motion";
import "./separators.scss";

const variants = {
  hidden: {
    lineHeight: 0,
    pathLength: 0,
  },
  visible: {
    lineHeight: 1,
    pathLength: 1,
    transition: {
      duration: 1,
    },
  },
};

const SeparatorOne = () => {
  return (
    <motion.div
      className="separator-two"
      variants={variants}
      initial="hidden"
      whileInView="visible"
    >
      <SeparatorStraigth />
      <SeparatorStraigth />
      <SeparatorStraigth />
    </motion.div>
  );
};

export default SeparatorOne;
