// import React from "react";
import Option from "./option";

function Question({ question, dispach, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispach={dispach} answer={answer} />
    </div>
  );
}

export default Question;
