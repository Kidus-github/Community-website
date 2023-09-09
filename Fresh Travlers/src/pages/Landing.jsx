import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PlaceToVisit from "../components/PlaceToVisit";
import "../style/landing.css";

function Landing() {
  return (
    <div>
      <Header />
      <Main />
      <PlaceToVisit />
      <Footer />
    </div>
  );
}

export default Landing;
