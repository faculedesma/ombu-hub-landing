import React from "react";
import { ArrowSCTA } from "@assets/svgs/ArrowSCTA";
import "./buttons.scss";

const SecondaryCTAButton = ({ label, onClick }) => {
  return (
    <button className="button button-cta--secondary" onClick={onClick}>
      {label}
      <ArrowSCTA />
    </button>
  );
};

export default SecondaryCTAButton;
