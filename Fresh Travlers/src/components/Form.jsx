import React, { useState } from "react";

function Form({ form }) {
  const [quantity, setQuantity] = useState(1);
  const [discription, setDiscription] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    "Essential",
    "Clothing",
    "Electronics",
    "Accessories",
    "Toiletries",
    "Food",
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={form.form_section}>
      <div>
        <form action="" onSubmit={handleSubmit} className={form.form}>
          <label>Add to List</label>
          <select
            name="categorie"
            className="Categoryselect"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Discription "
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
          <select
            name="Qty"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <button className="add-btn" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
