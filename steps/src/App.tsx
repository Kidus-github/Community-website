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
          <Message step={step}>
            <span>{messages[step]}</span>
          </Message>
          <div className="buttons">
            <Button bgcolor="#7950f2" textcolor="#fff" onClick={handlePrevious}>
              <span>👈</span>
              Previous
            </Button>
            <Button bgcolor="#7950f2" textcolor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ bgcolor, textcolor, onClick, children }: any) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function Message({ step, children }: any) {
  return (
    <div className="message">
      <h3> Step {step + 1} </h3>
      {children}
    </div>
  );
}

export default App;
