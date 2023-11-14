import React from "react";
import "./product.css";

function Product({ product, addtoCart, cart }) {
  const { id, title, category, discription, images, price, rating } = product;
  const ItemInCart = cart.filter((item) => item.id === id).length;
  return (
    <div className="product">
      <img src={images[0]} alt={title} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addtoCart(product)}>
        Add To Cart {ItemInCart > 0 && <>({ItemInCart})</>}
      </button>
    </div>
  );
}

export default Product;
