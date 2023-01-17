import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const UnderlineHero = () => {
  return (
    <svg
      width="280"
      height="6"
      viewBox="0 0 280 6"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M278.199 3.31314C223.047 0.393419 166.962 2.00836 111.671 1.48266C75.1103 1.13093 38.5464 0.283737 2.01163 8.48325e-05C0.916263 -0.00747922 0.0153919 0.491733 0.000178492 1.11955C-0.0143735 1.74737 0.862705 2.26174 1.95741 2.2693C38.4882 2.55295 75.0481 3.40014 111.605 3.75187C166.797 4.27757 222.776 2.65885 277.829 5.57479C278.92 5.63152 279.886 5.17391 279.992 4.54987C280.091 3.92584 279.284 3.37366 278.199 3.31314Z"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        fill="transparent"
        stroke="#14c9e5"
        strokeWidth={2.5}
      />
    </svg>
  );
};
