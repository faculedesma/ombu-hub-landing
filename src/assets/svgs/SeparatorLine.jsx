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

export const SeparatorLine = () => {
  return (
    <svg
      width="1440"
      height="141"
      viewBox="0 0 1440 141"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.00488281 55.4913C81.9585 105.896 127.056 134.947 271.663 126.991C353.706 118.218 487.186 55.4913 487.186 55.4913C721.561 -19.9441 771.085 73.9834 928.255 126.991C1049.66 169.745 1211.12 96.1706 1352.28 21.4882C1379.11 7.81546 1414.7 -1.17308 1442 1.45691"
        stroke="#031726"
        fill="transparent"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};

export default SeparatorLine;
