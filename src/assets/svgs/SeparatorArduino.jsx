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
      width="490"
      height="145"
      viewBox="0 0 490 145"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2.7139 1C1.00795 36.4299 1.81536 55.2896 11.2275 76.755C20.6396 98.2205 57.6111 126.045 94.0779 123.627C130.545 121.208 138.796 100.898 138.774 92.2072C138.751 83.5162 130.133 62.5434 94.0779 76.755C58.0229 90.9666 55.6348 147.725 138.774 142.684C221.912 137.644 267.207 92.76 370.428 43.6632C425.227 10.1929 505.885 2.69896 503.966 17.8723"
        fill="transparent"
        stroke="#14C9E5"
        strokeWidth={4}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};
