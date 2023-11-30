// import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispach }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "😃";
  else if (percentage >= 0 && percentage < 50) emoji = "🤔 ";
  else emoji = "🤦‍♂️";
  //   useEffect(() => {
  //     // console.log(percentage);
  //     dispach({ type: "highscore", payload: percentage });
  //   }, []);

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
