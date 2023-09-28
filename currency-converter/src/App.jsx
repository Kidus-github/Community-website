import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  function handleAmount(amount) {
    setAmount(amount);
  }
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [converted, setConverted] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const Controller = new AbortController();
    async function FetchConvertedAmount() {
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
    <div>
      <input
        type="text"
        value={String(amount)}
        onChange={(e) => handleAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading && converted && "Loading..."}
        {!isLoading && `${converted} ${to}`}
      </p>
    </div>
  );
}
