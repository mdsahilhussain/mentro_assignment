import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <button
      style={{
        ...props.style,
      }}
      className={`button ${props.isShadow ? "shadow" : ""}`}
    >
      {props.title}
    </button>
  );
};

export default Button;
