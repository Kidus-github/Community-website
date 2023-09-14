import React, { useState } from "react";

function Item({ item, onToggleItem, onDeleteItems }) {
  return (
    <div className="itemlist">
      <div>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span>
          {"  "}
          {item.qty} {item.discription}
        </span>
      </div>
      <button onClick={() => onDeleteItems(item.id)}>Del</button>
    </div>
  );
}

export default Item;
