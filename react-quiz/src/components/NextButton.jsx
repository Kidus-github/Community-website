// import React from "react";

function NextButton({ dispach, answer, numQuestions, index }) {
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispach({ type: "next" })}>
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
