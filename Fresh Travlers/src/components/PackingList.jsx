import React from "react";
import CategoryCard from "../components/CategoryCard";

function PackingList({
  packedItem,
  onDeleteItems,
  onClearItems,
  onToggleItem,
}) {
  return (
    <div className="packingList">
      <div className="packlist_header">
        <button onClick={onClearItems}>Clear All</button>
        <select>
          <option disabled>Sort By</option>
          <option value="ByInput">Sort By Input</option>
          <option value="ByDiscription">Sort By Discription</option>
          <option value="ByCategory">Sort By Category</option>
        </select>
      </div>

      {packedItem.length !== 0 ? (
        <div className="packlist_body">
          {[...new Set(packedItem.map((item) => item.category))].map(
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
