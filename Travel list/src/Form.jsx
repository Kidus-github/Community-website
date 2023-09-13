import { useState } from "react";

export default function Form({ onAddItems }) {
  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!discription) return;
    const newItem = {
      id: Date.now(),
      description: discription,
      quantity: quantity,
      packed: false,
    };

    onAddItems(newItem);
    setDiscription("");
    setQuantity(1);
    initialItems = [...initialItems, newItem];
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
