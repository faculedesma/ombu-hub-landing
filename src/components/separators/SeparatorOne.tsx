import React from "react";
import { SeparatorLine } from "@assets/svgs/SeparatorLine";
import { SeparatorArduino } from "@assets/svgs/SeparatorArduino";
import "./separators.scss";

const SeparatorOne = () => {
  return (
    <div className="separator-one">
      <div className="separator-arduino">
        <SeparatorArduino />
      </div>
      <div className="separator-lines">
        <SeparatorLine />
        <SeparatorLine />
      </div>
    </div>
  );
};

export default SeparatorOne;
