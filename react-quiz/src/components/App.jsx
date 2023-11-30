import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./mainbody";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import NextButton from "./NextButton";
import FinishScreen from "./finishScreen";

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const correctAnswer = state.questions.at(state.index).correctOption;
      const points =
        correctAnswer === action.payload
          ? state.points + state.questions[state.index].points
          : state.points;
      return { ...state, answer: action.payload, points: points };
    }
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        // status:
        //   state.index >= state.questions.length - 1 ? "finished" : state.status,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initalstate,
        questions: state.questions,
        status: "ready",
      };
    default:
      throw new Error("Action unknown");
  }
}
//'loading', 'error' , 'ready', 'active', 'finished'
const initalstate = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};
function App() {
  const [{ status, questions, index, answer, points, highscore }, dispach] =
    useReducer(reducer, initalstate);
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispach({ type: "dataReceived", payload: data }))
      .catch(() => dispach({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={questions.length} dispach={dispach} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              points={points}
              numQuestions={questions.length}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispach={dispach}
              answer={answer}
            />
            <NextButton
              dispach={dispach}
              answer={answer}
              index={index}
              numQuestions={questions.length}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispach={dispach}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
