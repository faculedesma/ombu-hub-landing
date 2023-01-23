import React, { useRef, useEffect } from "react";
import { UnderlineTeam } from "@assets/svgs/UnderlineTeam";
import EduPNG from "@assets/images/edu.png";
import NicoPNG from "@assets/images/nico.png";
import { motion, useAnimation, useInView } from "framer-motion";
import "./our-team.scss";

const team = [
  {
    id: "1",
    name: "Eduardo Roldán",
    nickname: "Edu",
    age: 30,
    description:
      "Contador especializado en programación pasionado por llevar el mundo adelante.",
    ocupation: "Contador",
    photo: EduPNG,
  },
  {
    id: "2",
    name: "Nicolás Roldán",
    nickname: "Nico",
    age: 25,
    description:
      "Contador especializado en programación pasionado por llevar el mundo adelante.",
    ocupation: "Contador",
    photo: NicoPNG,
  },
  {
    id: "3",
    name: "Marco Roldán",
    nickname: "Marco",
    age: 21,
    description:
      "Contador especializado en programación pasionado por llevar el mundo adelante.",
    ocupation: "Contador",
    photo: EduPNG,
  },
  {
    id: "4",
    name: "Julián Roldán",
    nickname: "Juli",
    age: 33,
    description:
      "Contador especializado en programación pasionado por llevar el mundo adelante.",
    ocupation: "Contador",
    photo: NicoPNG,
  },
];

const cardsContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const OurTeam = () => {
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
      <div className="our-team">
        <div className="our-team--title">
          <h2>Nuestro equipo</h2>
          <UnderlineTeam />
        </div>
        <motion.div
          ref={ref}
          className="our-team--list"
          variants={cardsContainer}
          initial="hidden"
          animate={controls}
        >
          {team.map((teammate, index) => {
            return (
              <motion.div
                className="our-team--list-mate"
                key={index}
                variants={item}
              >
                <div className="our-team--list-mate-photo">
                  <img src={teammate.photo} alt="tm-photo" />
                </div>
                <div className="our-team--list-mate-name">
                  <p>{teammate.nickname}</p>
                </div>
                <div className="our-team--list-mate-age">
                  <p>
                    <b>{teammate.age}</b> años
                  </p>
                </div>
                <div className="our-team--list-mate-description">
                  <p>{teammate.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
