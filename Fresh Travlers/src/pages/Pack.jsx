import Header from "../components/Header";

import React, { useState } from "react";

import PackCSS from "../style/pack.module.css";
import "../style/pack.css";
import Footer from "../components/Footer";

import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Stat from "../components/Stat";

function Pack() {
  const initalItems = [
    {
      id: 1,
      discription: "Passport",
      qty: 1,
      category: "Essential",
      packed: false,
    },

    {
      id: 2,
      discription: "Wallet",
      qty: 1,
      category: "Essential",
      packed: false,
    },
    {
      id: 3,
      discription: "Cash",
      qty: 1,
      category: "Essential",
      packed: false,
    },
    {
      id: 4,
      discription: "Plain Ticket",
      qty: 1,
      category: "Essential",
      packed: false,
    },

    {
      id: 5,
      discription: "Yellow Fiver",
      qty: 1,
      category: "Essential",
      packed: false,
    },
    {
      id: 6,
      discription: "Swimming cloth",
      qty: 2,
      category: "Clothing",
      packed: false,
    },
    {
      id: 7,
      discription: "Sandals",
      qty: 1,
      category: "Clothing",
      packed: false,
    },
    {
      id: 8,
      discription: "Light Jacket",
      qty: 3,
      category: "Clothing",
      packed: false,
    },
    {
      id: 8,
      discription: "Underwear",
      qty: 7,
      category: "Clothing",
      packed: false,
    },
    {
      id: 9,
      discription: "Bra",
      qty: 2,
      category: "Clothing",
      packed: false,
    },
    {
      id: 10,
      discription: "Socks",
      qty: 7,
      category: "Clothing",
      packed: false,
    },
    {
      id: 11,
      discription: "PJ",
      qty: 1,
      category: "Clothing",
      packed: false,
    },
    {
      id: 12,
      discription: "T-shirt",
      qty: 5,
      category: "Clothing",
      packed: false,
    },
    {
      id: 13,
      discription: "Jeans",
      qty: 3,
      category: "Clothing",
      packed: false,
    },
    {
      id: 14,
      discription: "Yoga Pants",
      qty: 1,
      category: "Clothing",
      packed: false,
    },
    {
      id: 15,
      discription: "Sweater",
      qty: 3,
      category: "Clothing",
      packed: false,
    },
    {
      id: 16,
      discription: "Cell Phone",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 17,
      discription: "Phone Charger",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 18,
      discription: "Laptop",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 19,
      discription: "Laptop Charger",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 20,
      discription: "Power Bank",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 21,
      discription: "Earphones",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 22,
      discription: "Camera",
      qty: 1,
      category: "Electronics",
      packed: false,
    },
    {
      id: 23,
      discription: "Purse",
      qty: 1,
      category: "Accessories",
      packed: false,
    },
    {
      id: 24,
      discription: "Umbrella",
      qty: 1,
      category: "Accessories",
      packed: false,
    },
    {
      id: 25,
      discription: "Hat or Scarves",
      qty: 1,
      category: "Accessories",
      packed: false,
    },
    {
      id: 26,
      discription: "Sunglass",
      qty: 1,
      category: "Accessories",
      packed: false,
    },
    {
      id: 27,
      discription: "Nail Polish",
      qty: 2,
      category: "Accessories",
      packed: false,
    },
    {
      id: 28,
      discription: "Ear ring ",
      qty: 3,
      category: "Accessories",
      packed: false,
    },
    {
      id: 29,
      discription: "Necklace",
      qty: 2,
      category: "Accessories",
      packed: false,
    },
    {
      id: 30,
      discription: "Belt",
      qty: 1,
      category: "Accessories",
      packed: false,
    },
    {
      id: 31,
      discription: "Toothbrush & Toothpaste",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 32,
      discription: "Body Wash",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 33,
      discription: "Deodorant",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 34,
      discription: "Face Wash",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 35,
      discription: "Vaseline",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 36,
      discription: "Comb",
      qty: 2,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 37,
      discription: "Shampoo",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 38,
      discription: "Conditioner",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 39,
      discription: "Pads",
      qty: 14,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 40,
      discription: "Hand Sanitizer",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 41,
      discription: "Badge",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 42,
      discription: "Pain reliever",
      qty: 2,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 43,
      discription: "Sun Screen",
      qty: 1,
      category: "Toiletries",
      packed: false,
    },
    {
      id: 44,
      discription: "Biscut",
      qty: 1,
      category: "Food",
      packed: false,
    },
  ];
  const [packedItem, setPackedItem] = useState(initalItems);
  function handleAdd(newItem) {
    setPackedItem(() => [...packedItem, newItem]);
  }
  function handleDelete(id) {
    setPackedItem((packedItem) => packedItem.filter((item) => item.id !== id));
  }
  function ClearAll() {
    setPackedItem([]);
  }
  function handleToggleItem(id) {
    setPackedItem((packedItem) =>
      packedItem.map((item) =>
        (item.id = id) ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Header head={PackCSS} />
      <Form form={PackCSS} onAddItems={handleAdd} />
      <PackingList
        packedItem={packedItem}
        onDeleteItems={handleDelete}
        onClearItems={ClearAll}
        onToggleItem={handleToggleItem}
      />
      <Stat />
      <Footer />
    </div>
  );
}

export default Pack;
