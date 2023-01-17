import React from "react";
import { HappyFace } from "@assets/svgs/HappyFace";
import { UnderlineHero } from "@assets/svgs/UnderlineHero";
import { Star } from "@assets/svgs/Star";
import { SeparatorLine } from "@assets/svgs/SeparatorLine";
import { LineTwo } from "@assets/svgs/LineTwo";
import VideoScreenPNG from "@assets/images/video-screen.png";
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

const StudentsReview = () => {
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
        <div className="students-review--list">
          {reviews.map((review) => {
            return (
              <div className="students-review--list-item">
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
              </div>
            );
          })}
        </div>
        <div className="students-review--video">
          <div className="students-review--video-lines">
            <SeparatorLine />
            <SeparatorLine />
          </div>
          <div className="students-review--video-box">
            <img src={VideoScreenPNG} alt="video" />
            <LineTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsReview;
