// import React from "react";

function Option({ question, dispach, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? question.correctOption === i
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          disabled={hasAnswered}
          onClick={() => dispach({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
