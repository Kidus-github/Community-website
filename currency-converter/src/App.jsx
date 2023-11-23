import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [active, setactive] = useState(0);
  const [converted, setConverted] = useState();
  const [isLoading, setIsLoading] = useState(false);
  function handleActive(activetab) {
    setactive(activetab);
  }
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  function handleAmount(amount) {
    setAmount((a) => (a = amount));
  }
  function handlefrom(fromcurr) {
    setFrom(fromcurr);
  }
  function handleto(tocurr) {
    setTo(tocurr);
  }
  return (
    <div>
      <Header amount={amount} from={from} to={to} />

      <Main>
        <>
          <div className="tab-section">
            <TabBtn
              icon={
                active === 0
                  ? "src/assets/exchange.png"
                  : "src/assets/exchangedark.png"
              }
              text={"Convert"}
              active={active === 0 ? "active" : ""}
              OnActive={() => handleActive(0)}
            />
            <TabBtn
              icon={
                active === 1
                  ? "src/assets/chart.png"
                  : "src/assets/chartdark.png"
              }
              text={"Bank Chart"}
              active={active === 1 ? "active" : ""}
              OnActive={() => handleActive(1)}
            />
            <TabBtn
              icon={
                active === 2
                  ? "src/assets/chart.png"
                  : "src/assets/chartdark.png"
              }
              text={"Black Chart"}
              active={active === 2 ? "active" : ""}
              OnActive={() => handleActive(2)}
            />
          </div>
          <Convertion
            setIsLoading={setIsLoading}
            setConverted={setConverted}
            handlefrom={handlefrom}
            handleAmount={handleAmount}
            handleto={handleto}
            to={to}
            from={from}
            amount={amount}
          />
          <Output
            isLoading={isLoading}
            converted={converted}
            to={to}
            amount={amount}
            from={from}
          />
        </>
      </Main>
    </div>
  );
}
function Header({ amount, from, to }) {
  return (
    <div className="header">
      <Logo />
      <Title from={from} amount={amount} to={to} />
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <img src="src/assets/logofinal.png" alt="logo" />
      <h1>
        <span>Shady</span> Cash
      </h1>
    </div>
  );
}
function Title({ amount, from, to, fromCurr, tocurr }) {
  return (
    <div className="title">
      <h1>{`${amount} ${from} to ${to} - Convert ${fromCurr} to ${tocurr}`}</h1>
    </div>
  );
}
function Main({ children }) {
  return <div className="main">{children}</div>;
}

function TabBtn({ icon, text, active, OnActive }) {
  return (
    <div className={`tab ${active}`} onClick={OnActive}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
}
function Convertion({
  setIsLoading,
  setConverted,
  amount,
  from,
  to,
  handleAmount,
  handlefrom,
  handleto,
}) {
  useEffect(() => {
    async function FetchConvertedAmount() {
      if (amount === "") {
        setConverted(0);
        return;
      }
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();
      setConverted(data.rates[to]);
      setIsLoading(false);
    }
    if (to === from) return setConverted(amount);
    FetchConvertedAmount();
  }, [amount, from, to]);
  return (
    <div className="convertion">
      <div className="Amount">
        <label>Amount: </label>
        <input
          type="text"
          value={String(amount)}
          onChange={(e) => handleAmount(e.target.value)}
        />
      </div>
      <div className="from">
        <label>From: </label>
        <select value={from} onChange={(e) => handlefrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button className="swap">
        <img src="src/assets/transfer.png" alt="" />
      </button>
      <div className="to">
        <label>To: </label>
        <select value={to} onChange={(e) => handleto(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    </div>
  );
}
function Output({ isLoading, converted, to, amount, from }) {
  return (
    <div className="output">
      <p>
        {amount ? amount : "0"} {from} =
      </p>
      <h3>
        {isLoading && converted && "Loading..."}
        {!isLoading && `${converted} ${to} `}
      </h3>
      <p>1 some thing is something </p>
      <p>1 some thing is something </p>
    </div>
  );
}
