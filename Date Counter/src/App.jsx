import { useState } from "react";
import "./App.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="step">
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <p> Step: {step}</p>
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="count">
        <button
          onClick={() => {
            setCount((count) => count - step);
          }}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            setCount((count) => count + step);
          }}
        >
          +
        </button>
      </div>
      <p>
        {count > 0
          ? count + " days from today is "
          : count < 0
          ? Math.abs(count) + " days ago was "
          : " Today is "}
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

function App() {
  return <Counter />;
}

export default App;
