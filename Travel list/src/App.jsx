import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stat";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "TAB", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(newitems) {
    setItems(() => [...items, newitems]);
  }
  function handleCancel(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDelete() {
    if (confirm("Are You Sure You Want To Delte All Items?")) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        cancel={handleCancel}
        onToggleItem={handleToggleItem}
        onDelete={handleDelete}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
