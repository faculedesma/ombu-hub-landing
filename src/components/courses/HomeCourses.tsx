import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Star } from "@assets/svgs/Star";
import SecondaryCTAButton from "@components/buttons/SecondaryCTAButton";
import CourseCard from "./CourseCard";
import "./courses.scss";

const courses = [
  {
    id: "3d",
    title: "Diseño 3D",
    learnings: [
      "Aprendizaje XXXXXXXXXX",
      "Aprendizaje YYYYYYYYYY",
      "Aprendizaje ZZZZZZZZZZZZ",
      "Aprendizaje WWWWWWWWWWWW",
    ],
    price: {
      amount: "10.000",
      type: "por mes",
      currency: "ARS",
    },
    isNew: false,
  },
  {
    id: "robotica",
    title: "Robótica",
    learnings: [
      "Aprendizaje XXXXXXXXXX",
      "Aprendizaje YYYYYYYYYY",
      "Aprendizaje ZZZZZZZZZZZZ",
      "Aprendizaje WWWWWWWWWWWW",
    ],
    price: {
      amount: "25.000",
      type: "una vez",
      currency: "ARS",
    },
    isNew: true,
  },
  {
    id: "programacion",
    title: "Programación",
    learnings: [
      "Aprendizaje XXXXXXXXXX",
      "Aprendizaje YYYYYYYYYY",
      "Aprendizaje ZZZZZZZZZZZZ",
      "Aprendizaje WWWWWWWWWWWW",
    ],
    price: {
      amount: "50.000",
      type: "una vez",
      currency: "ARS",
    },
    isNew: false,
  },
];

const cardsContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HomeCourses = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="container">
      <motion.div className="home-courses">
        <div className="home-courses--title">
          <Star />
          <h2>Nuestros cursos para jóvenes</h2>
          <Star />
        </div>
        <div className="home-courses--subtitle">
          <p>“Aprendé poniendo manos a la obra”</p>
        </div>
        <motion.ul
          ref={ref}
          className="home-courses--cards"
          variants={cardsContainer}
          initial="hidden"
          animate={controls}
        >
          {courses.map((course, index) => {
            return (
              <motion.li key={index} variants={item}>
                <CourseCard course={course} />
              </motion.li>
            );
          })}
        </motion.ul>
        <div className="home-courses--more">
          <SecondaryCTAButton label="Más cursos" />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeCourses;
