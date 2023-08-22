import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);

  async function giveAdvice() {
    const res = await fetch(`http://api.adviceslip.com/advice`);
    const data = await res.json();
    setadvice(data.slip.advice);
    setcount((c) => (c = c + 1));
  }

  useEffect(() => {
    giveAdvice();
  }, []);

  return (
    <>
      <div className="advice">
        <h1>"{advice}"</h1>
        <button onClick={giveAdvice}>&gt;</button>
      </div>
      <Message count={count} />
    </>
  );
}

export default App;

function Message({ count }: any) {
  return (
    <div className="Message">
      <p>
        You have viewd <span>{count}</span> Advice
      </p>
    </div>
  );
}
