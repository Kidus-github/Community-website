import React from "react";
import { useState } from "react";
import CategoryCard from "../components/CategoryCard";

function PackingList({
  packedItem,
  onDeleteItems,
  onClearItems,
  onToggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  switch (sortBy) {
    case "packed": {
      sortedItem = packedItem
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      console.log(sortedItem);
      break;
    }
    case "description": {
      sortedItem = packedItem
        .slice()
        .sort((a, b) => a.discription.localeCompare(b.discription));
      console.log(sortedItem);
      break;
    }
    case "category": {
      sortedItem = packedItem
        .slice()
        .sort((a, b) => a.category.localeCompare(b.category));
      console.log(sortedItem);
      break;
    }
    default: {
      sortedItem = packedItem;
    }
  }
  return (
    <div className="packingList">
      <div className="packlist_header">
        <button onClick={onClearItems}>Clear All</button>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option disabled>Sort By</option>
          <option value="ByInput">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="ByCategory">Sort By Category</option>
        </select>
      </div>

      {sortedItem.length !== 0 ? (
        <div className="packlist_body">
          {[...new Set(sortedItem.map((item) => item.category))].map(
            (item, i) => (
              <CategoryCard
                key={i}
                category={item}
                packedItem={packedItem}
                onToggleItem={onToggleItem}
                onDeleteItems={onDeleteItems}
              />
            )
          )}
        </div>
      ) : (
        <h1>Your Custom Packing List is Empty</h1>
      )}
    </div>
  );
}

export default PackingList;
