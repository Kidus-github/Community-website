import React from "react";
import Nav from "./Nav";

function Header({ head }) {
  return (
    <div className={head.header}>
      <Nav navCss={head} />
    </div>
  );
}

export default Header;
