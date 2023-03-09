import React from "react";

const Button = (props) => {
  return (
    <button style={{ ...props.style, outline: "none", border: "none" }}>
      {props.title}
    </button>
  );
};

export default Button;
