import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="menu">
        <div className="hamTop"></div>
        <div className="hamMid"></div>
        <div className="hamBottom"></div>
      </div>
      <div className="logo" onClick={() => navigate("../home")}>
        Fresh Travlers
      </div>
      <button className="pack" onClick={() => navigate("../Pack")}>
        Start Packing
      </button>
    </div>
  );
}

export default Nav;
