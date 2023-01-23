import React from "react";
import PrimaryCTAButton from "@components/buttons/PrimaryCTAButton";
import SecondaryCTAButton from "@components/buttons/SecondaryCTAButton";
import { Remolino } from "@assets/svgs/Remolino";
import { UnderlineHero } from "@assets/svgs/UnderlineHero";
import { HappyFace } from "@assets/svgs/HappyFace";
import KidHeroPNG from "@assets/images/kid-hero.png";
import { motion } from "framer-motion";
import AnimatedText from "@components/text/AnimatedText";
import "./hero.scss";

const titleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left--top">
            <div className="hero-left--top-title">
              <UnderlineHero />
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                ACELERA TU CRECIMIENTO
              </motion.h1>
            </div>
            <div className="hero-left--top-dot">
              <p>.</p>
            </div>
          </div>
          <div className="hero-left--subtitle">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Desarrolla el crecimiento personal, tus habilidades, conocimientos
              tecnológicos y conseguí grandes oportunidades de trabajo.
            </motion.p>
          </div>
          <div className="hero-left--ctas">
            <PrimaryCTAButton label="Ver Cursos" />
            <SecondaryCTAButton label="Contactános" />
          </div>
          <div className="hero-left--social-proof">
            <p>
              <b>+100</b> Jóvenes ya confiaron en Ombu Hub
            </p>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right--kid">
            <img src={KidHeroPNG} alt="kid-hero" />
          </div>
          <div className="hero-right--happy">
            <HappyFace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
