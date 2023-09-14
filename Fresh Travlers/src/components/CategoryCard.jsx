import React from "react";
import Item from "./Item";

function CategoryCard({ category, packedItem, onToggleItem, onDeleteItems }) {
  return (
    <div className="CategoryCard">
      <h3>{category}</h3>
      {console.log(category)}

      {packedItem
        .filter((item) => item.category === category)
        .map((item, i) => (
          <Item
            key={i}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItems={onDeleteItems}
          />
        ))}
    </div>
  );
}

export default CategoryCard;
