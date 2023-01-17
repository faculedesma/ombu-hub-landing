import React from "react";
import PrimaryCTAButton from "@components/buttons/PrimaryCTAButton";
import SecondaryCTAButton from "@components/buttons/SecondaryCTAButton";
import { Remolino } from "@assets/svgs/Remolino";
import { UnderlineHero } from "@assets/svgs/UnderlineHero";
import { Sparkle } from "@assets/svgs/Sparkle";
import { HappyFace } from "@assets/svgs/HappyFace";
import { HandBig } from "@assets/svgs/HandBig";
import ArduinoPNG from "@assets/images/arduino.png";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left--title">
            <UnderlineHero />
            <h1>ACELERA TU CRECIMIENTO</h1>
            <b>.</b>
          </div>
          <div className="remolino">
            <Remolino />
          </div>
          <p>
            Desarrolla el crecimiento personal, tus habilidades, conocimientos
            tecnológicos y conseguí grandes oportunidades de trabajo.
          </p>
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
          <div className="arduino">
            <img src={ArduinoPNG} alt="arduino" />
            <div className="overlay"></div>
            <div className="binary">
              1000111100000010000110001111000000100001100011110000001000011000111100000010000110001111000000100001100011110000001000010010000100000000000010111110000111111111111111110100011110000001100001100011110000001000011000111100000010000110001111000000100001100011110000001000011000111100000010000100100001000000000000010111110000111111111111111110100011110000001000011000111101000001000011000111100000010000110001111000000100001100011110000001000011000111100000010000100100001000000000000101111100001111111111111111101000111100000010000110001111000000100001100011110000001000011000111100000010000110001111000000100001100011110000001000010010000100000000000010111110000111111111111111110100011110000001000011000111100000010000110001111000000100001100011110000001000011000111100000010000110001111000000100101010101010101011111101111000000111101010101000000111010101111100000010010101010111110000
            </div>
            <div className="sparkles">
              <Sparkle />
              <Sparkle />
            </div>
          </div>
          <div className="happy-face">
            <HappyFace />
          </div>
        </div>
        <div className="hand-big">
          <HandBig />
        </div>
      </div>
    </div>
  );
};

export default Hero;
