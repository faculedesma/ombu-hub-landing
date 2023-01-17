import React from "react";
import "./buttons.scss";

const PrimaryCTAButton = ({ label, onClick }) => {
  return (
    <button className="button button-cta--primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryCTAButton;
