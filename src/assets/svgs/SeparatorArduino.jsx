import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
    },
  },
};

export const SeparatorArduino = () => {
  return (
    <svg
      svg
      width="481"
      height="204"
      viewBox="0 0 481 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M57.5005 0.5C59.0542 16.4001 -3.20208 96.3907 3.22775 135.755C9.65757 175.119 49.6114 185.045 86.0783 182.627C122.545 180.208 130.797 159.898 130.774 151.207C130.751 142.516 122.133 121.543 86.0783 135.755C50.0233 149.967 47.6352 206.725 130.774 201.684C213.913 196.644 259.208 151.76 362.429 102.663C417.228 69.1929 497.887 61.699 495.968 76.8723"
        stroke="#14C9E5"
        strokeWidth={4}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};
