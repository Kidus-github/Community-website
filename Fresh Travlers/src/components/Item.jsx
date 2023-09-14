import React, { useState } from "react";

function Item({ item, onToggleItem, onDeleteItems }) {
  const [packed, setPacked] = useState(false);
  return (
    <div className="item">
      <input
        type="checkbox"
        value={packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {"  "}
        {item.qty} {item.discription}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>Del</button>
    </div>
  );
}

export default Item;
