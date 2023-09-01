import { useState } from "react";
import "./App.css";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "TAB", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1 className="logo">⛱🩱👙 Fresh TRAVLERS 👜👝🎒</h1>;
}
function Form() {
  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!discription) return;
    const newItem = { discription, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDiscription("");
    setQuantity(1);
    initialItems = [...initialItems, newItem];
    console.log(initialItems);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Items item={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
function Items({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>🙅‍♂️⨉</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        👜👝🎒 you have X items on your list, and you already packed X (X%) of
        your list{" "}
      </em>
    </footer>
  );
}

export default App;
