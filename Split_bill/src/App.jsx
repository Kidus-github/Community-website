import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState("");
  const [persentage1, setPersentage1] = useState(0);
  const [persentage2, setPersentage2] = useState(0);

  const tip = (price * (persentage1 + persentage2)) / 2 / 100;

  function handlePrice(value) {
    setPrice(Number(value));
  }
  function handleClear() {
    setPrice("");
    setPersentage1(0);
    setPersentage2(0);
    setTip(0);
  }
  const total = price + tip;
  return (
    <div className="splitBill">
      <BillInput price={price} handlePrice={handlePrice} />
      <SelectPersentage tip={persentage1} handleTip={setPersentage1}>
        How did you like the service?
      </SelectPersentage>
      <SelectPersentage tip={persentage2} handleTip={setPersentage2}>
        How did your friend like the service?
      </SelectPersentage>
      {price > 0 && (
        <>
          <Output bill={price} tip={tip} total={total} />
          <Reset handleClear={handleClear} />
        </>
      )}
    </div>
  );
}

function BillInput({ price, handlePrice }) {
  return (
    <div style={{ display: "inline" }}>
      <label htmlFor="input">How much was the bill?</label>
      <input
        type="text"
        name="input"
        placeholder="Bill Input"
        value={price}
        onChange={(e) => handlePrice(e.target.value)}
      />
    </div>
  );
}
function SelectPersentage({ tip, handleTip, children }) {
  return (
    <div className="selectPersentage">
      <label htmlFor="">{children}</label>
      <select
        value={tip}
        onChange={(e) => {
          handleTip(Number(e.target.value));
        }}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ total, bill, tip }) {
  return <h2>{`You Pay  ${total}$( $${bill < 1 ? 0 : bill}+ $${tip} tip)`}</h2>;
}
function Reset({ handleClear }) {
  return (
    <button className="btn" onClick={handleClear}>
      Reset
    </button>
  );
}
export default App;
