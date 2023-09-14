import React from "react";
import { useNavigate } from "react-router-dom";

function Nav({ navCss }) {
  const navigate = useNavigate();
  return (
    <div className={navCss.nav}>
      <div className={"menu"}>
        <div className={navCss.bgcolor}></div>
        <div className={navCss.bgcolor}></div>
        <div className={navCss.bgcolor}></div>
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
