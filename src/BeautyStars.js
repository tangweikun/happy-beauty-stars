import React, { useState } from "react";
import { Star } from "./Star";

export function BeautyStars(props) {
  const { maxStars = 5 } = props;
  const [num, setNum] = useState(-1);

  return (
    <div
      style={{
        color: " #121621",
        display: "flex"
      }}
    >
      {Array(maxStars)
        .fill(null)
        .map((_, index) => (
          <div
            title={`${index} star`}
            key={index}
            onClick={() => {
              setNum(index === num ? -1 : index);
            }}
            style={{
              cursor: "pointer",
              position: "relative",
              marginRight: index !== maxStars ? 16 : 0
            }}
          >
            <Star selected={index <= num} />
          </div>
        ))}
    </div>
  );
}
