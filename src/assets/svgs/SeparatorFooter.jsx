import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

export const SeparatorFooter = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <svg
      ref={ref}
      width="1440"
      height="252"
      viewBox="0 0 1440 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M272.658 126.991C128.051 134.947 82.9536 105.896 1 55.4914V235L1443 250V1.4571C1415.7 -1.17289 1380.1 7.81563 1353.28 21.4883C1212.11 96.1706 1050.65 169.745 929.25 126.991C772.08 73.9835 722.556 -19.9439 488.181 55.4914C488.181 55.4914 354.701 118.219 272.658 126.991Z"
        fill="#031726"
        stroke="#031726"
        stroke-width="2"
      />
      <motion.path
        d="M1 68.4914C82.9536 118.896 128.051 147.947 272.658 139.991C354.701 131.219 488.181 68.4914 488.181 68.4914C722.556 -6.94389 772.08 86.9835 929.25 139.991C1050.65 182.745 1212.11 109.171 1353.28 34.4883C1380.1 20.8156 1415.7 11.8271 1443 14.4571"
        stroke="white"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate={controls}
      />
    </svg>
  );
};
