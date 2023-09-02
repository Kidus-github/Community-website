import React from "react";
import Card from "./Card";

function PlaceToVisit() {
  return (
    <div className="visits">
      <h2>Place's To Visit</h2>
      <div className="cards">
        <Card backgroundImage='url("src/assets/thiland4.jpg")' />
        <Card backgroundImage='url("src/assets/thiland2.jpg")' />
        <Card backgroundImage='url("src/assets/thiland1.jpeg")' />
      </div>
    </div>
  );
}

export default PlaceToVisit;
