import { useState } from "react";
import Items from "./Items";

export default function PackingList({ items, cancel, onToggleItem, onDelete }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  switch (sortBy) {
    case "packed": {
      sortedItem = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      console.log(sortedItem);
      break;
    }
    case "description": {
      sortedItem = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      console.log(sortedItem);
      break;
    }
    default: {
      sortedItem = items;
    }
  }
  return (
    <div className="list">
      <ul>
        {sortedItem.map((items) => (
          <Items
            item={items}
            key={items.id}
            cancel={cancel}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name="Sorts"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By packed Status</option>
        </select>
        <button onClick={onDelete}>Clear list</button>
      </div>
    </div>
  );
}
