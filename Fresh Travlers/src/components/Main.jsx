import React from "react";

function Main() {
  return (
    <div>
      <div className="video">
        <video autoPlay muted loop>
          <source src="src\assets\main.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Main;
