import Header from "../components/Header";

import React from "react";

import PackCSS from "../style/pack.module.css";
import "../style/pack.css";
import Footer from "../components/Footer";

import Form from "../components/Form";
import PackingList from "../components/PackingList";

function Pack() {
  return (
    <div>
      <Header head={PackCSS} />
      <Form form={PackCSS} />
      <PackingList />
      <Footer />
    </div>
  );
}

export default Pack;
