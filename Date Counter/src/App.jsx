import { useState } from "react";
import "./App.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <h1 className="date">
        {count > 0
          ? count + " days from today is "
          : count < 0
          ? Math.abs(count) + " days ago was "
          : " Today is "}
        <span>{date.toDateString()}</span>
      </h1>
      <div className="step">
        <input
          type="range"
          value={step}
          min={1}
          max={10}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <p> Step: {step}</p>
      </div>
      <div className="count">
        <button
          onClick={() => {
            setCount((count) => Number(count) + step);
          }}
        >
          +
        </button>
        <input
          type="text"
          value={count}
          placeholder="Date From Now "
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setCount((count) => count - step);
          }}
        >
          -
        </button>
      </div>
      {count || step !== 1 ? (
        <button
          className="btn"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
