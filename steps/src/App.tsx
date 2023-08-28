import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setSteps] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 0) setSteps((s) => s - 1);
  }
  function handleNext() {
    if (step < 2) setSteps((s) => s + 1);
  }
  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step + 1}: {messages[step]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
