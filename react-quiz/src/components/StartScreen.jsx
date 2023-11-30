// import React from "react";

function StartScreen({ numQuestions, dispach }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quize!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button className="btn btn-ui" onClick={() => dispach({ type: "start" })}>
        Let&apos;s Start
      </button>
    </div>
  );
}

export default StartScreen;
