import React, { useRef, useEffect } from "react";
import { HappyFace } from "@assets/svgs/HappyFace";
import { UnderlineHero } from "@assets/svgs/UnderlineHero";
import { Star } from "@assets/svgs/Star";
import { SeparatorLine } from "@assets/svgs/SeparatorLine";
import { LineTwo } from "@assets/svgs/LineTwo";
import { Quote } from "@assets/svgs/Quote";
import VideoScreenPNG from "@assets/images/video-screen.png";
import { motion, useAnimation, useInView } from "framer-motion";
import "./students-review.scss";

const reviews = [
  {
    id: 1,
    description:
      "Mi experiencia en OMBU Hub como un niño de no sé cuántos años. La verdad que la pase increíble y aprendí mucho. También hice muchos amigos que eso es lo más importante! Muchas gracias OMBU!",
    name: "Facu",
    age: 9,
  },
  {
    id: 2,
    description:
      "Mi experiencia en OMBU Hub como un niño de no sé cuántos años. La verdad que la pase increíble y aprendí mucho. También hice muchos amigos que eso es lo más importante! Muchas gracias OMBU!",
    name: "Juan",
    age: 11,
  },
  {
    id: 3,
    description:
      "Mi experiencia en OMBU Hub como un niño de no sé cuántos años. La verdad que la pase increíble y aprendí mucho. También hice muchos amigos que eso es lo más importante! Muchas gracias OMBU!",
    name: "Benja",
    age: 6,
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

const StudentsReview = () => {
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
      <div className="students-review">
        <div className="students-review--title">
          <div className="students-review--title-top">
            <h3>Alumnos contentos</h3>
            <HappyFace />
          </div>
          <div className="students-review--title-bottom">
            <UnderlineHero />
          </div>
        </div>
        <motion.div
          ref={ref}
          className="students-review--list"
          variants={cardsContainer}
          initial="hidden"
          animate={controls}
        >
          {reviews.map((review, index) => {
            return (
              <motion.div
                key={index}
                variants={item}
                className="students-review--list-item"
              >
                <div className="students-review--list-item-quote">
                  <Quote />
                </div>
                <div className="students-review--list-item-description">
                  <p>{review.description}</p>
                </div>
                <div className="students-review--list-item-name">
                  <Star />
                  <p>{review.name}</p>
                  <Star />
                </div>
                <div className="students-review--list-item-age">
                  <p>
                    <b>{review.age}</b> años
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="students-review--video">
          <div className="students-review--video-lines">
            <SeparatorLine />
            <SeparatorLine />
          </div>
          <motion.div
            className="students-review--video-box"
            initial={{
              scale: 0,
            }}
            viewport={{ once: true }}
            animate={{
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <img src={VideoScreenPNG} alt="video" />
            <LineTwo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentsReview;
