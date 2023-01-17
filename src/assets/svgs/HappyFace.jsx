import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

export const HappyFace = () => {
  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.4036 9.44065C22.773 19.9106 11.5253 24.1673 1.07858 18.2729C0.73081 18.0766 0.289797 18.1993 0.0935228 18.5428C-0.102751 18.8924 0.0199333 19.334 0.367706 19.5303C11.5651 25.854 23.6415 21.3459 29.6769 10.1276C29.8658 9.77799 29.7339 9.33631 29.3825 9.14617C29.031 8.96217 28.5925 9.09103 28.4036 9.44065Z"
        fill="black"
      />
      <path
        d="M9.86963 13.7822C11.0327 13.7822 11.9756 12.8394 11.9756 11.6763C11.9756 10.5132 11.0327 9.57031 9.86963 9.57031C8.70653 9.57031 7.76367 10.5132 7.76367 11.6763C7.76367 12.8394 8.70653 13.7822 9.86963 13.7822Z"
        fill="black"
      />
      <path
        d="M18.5882 11.5437C19.7286 11.5437 20.6531 10.6192 20.6531 9.47886C20.6531 8.3385 19.7286 7.41406 18.5882 7.41406C17.4479 7.41406 16.5234 8.3385 16.5234 9.47886C16.5234 10.6192 17.4479 11.5437 18.5882 11.5437Z"
        fill="black"
      />
    </motion.svg>
  );
};
