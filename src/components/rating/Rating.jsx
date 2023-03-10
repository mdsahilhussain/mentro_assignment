import React from "react";
import { MdStar } from "react-icons/md";
import { TiStarHalf } from "react-icons/ti";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const fullStarsArray = Array.from({ length: fullStars }, (_, i) => (
    <MdStar key={i} />
  ));

  const halfStar = hasHalfStar && <TiStarHalf />;

  return (
    <div>
      {fullStarsArray}
      {halfStar}
    </div>
  );
};

export default Rating;
