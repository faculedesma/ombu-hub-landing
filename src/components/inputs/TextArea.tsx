import React from "react";
import "./inputs.scss";

const TextArea = ({
  placeholder = "",
  size = "small",
  onChange = () => null,
}) => {
  return (
    <textarea
      className={`input input-${size}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextArea;
