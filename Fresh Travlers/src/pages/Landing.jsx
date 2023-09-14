import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PlaceToVisit from "../components/PlaceToVisit";
import LandingCSS from "../style/landing.module.css";

function Landing() {
  return (
    <div>
      <Header head={LandingCSS} />
      <Main />
      <PlaceToVisit />
      <Footer />
    </div>
  );
}

export default Landing;
