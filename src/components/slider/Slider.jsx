import React, { useState } from "react";
import { items } from "../../constants/user-data";
import "./slider.css";
function Slider({ angle, sectionAngle }) {
  const radius = 250;
  const sectionRadian = (sectionAngle * Math.PI) / 180;

  const getStyle = (i) => {
    const theta = i * sectionRadian - Math.PI / 2 + (angle * Math.PI) / 180;
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    return { left: x + "px", top: y + "px" };
  };

  return (
    <div className="slider">
      <div className="round___slider">
        {items.map((item, index) => (
          <div key={index} className="item" style={getStyle(index)}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
