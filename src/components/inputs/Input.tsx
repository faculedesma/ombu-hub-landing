import React from "react";
import "./inputs.scss";

const Input = ({
  placeholder = "",
  type = "text",
  size = "small",
  onChange = () => null,
}) => {
  return (
    <input
      className={`input input-${size}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
