import React from "react";
import PrimaryCTAButton from "@components/buttons/PrimaryCTAButton";
import { New } from "@assets/svgs/New";
import { Check } from "@assets/svgs/Check";
import "./course-card.scss";

const CourseCard = ({ course }) => {
  return (
    <div className={`course-card ${course.isNew ? "new" : ""}`}>
      {course.isNew ? <New /> : null}
      <h3>{course.title}</h3>
      <div className="course-card--learning-list">
        {course.learnings.map((learning, index) => {
          return (
            <div className="course-card--learning-list-item">
              <Check />
              <p>{learning}</p>
            </div>
          );
        })}
      </div>
      <div className="course-card--price">
        <div className="course-card--price-amount">
          <b>{course.price.currency}</b>
          <p>{course.price.amount}</p>
        </div>
        <div className="course-card--price-type">
          <p>/ {course.price.type}</p>
        </div>
      </div>
      <PrimaryCTAButton label="Inscribíte" />
    </div>
  );
};

export default CourseCard;
