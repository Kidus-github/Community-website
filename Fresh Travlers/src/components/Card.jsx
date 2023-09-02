import React from "react";

function Card({ backgroundImage }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
}

export default Card;
