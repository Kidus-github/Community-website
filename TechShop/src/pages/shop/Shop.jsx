import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./shop.css";
function Shop({ addtoCart, cart, products, setProducts }) {
  async function getFunction() {
    const check = localStorage.getItem("products");
    if (check) {
      setProducts(JSON.parse(check));
    } else {
      const data = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
      );
      const res = await data.json();
      setProducts(res);
      localStorage.setItem("products", JSON.stringify(res));
    }
  }
  useEffect(() => {
    getFunction();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Hagere TechShop</h1>
      </div>
      <div className="products">
        {products.map((item) => (
          <Product
            key={item.id}
            product={item}
            addtoCart={addtoCart}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
