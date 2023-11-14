import React from "react";

function CartItem({ item, itemInCart, addtoCart, removeToCart }) {
  const { id, title, category, discription, images, price, rating } = item;
  const howManyItemsInCart = itemInCart.filter((item) => item.id === id).length;
  //   console.log(item);
  return (
    <div className="cartItem">
      <img src={images[0]} alt={title} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeToCart(item)}> - </button>
          <input type="text" value={howManyItemsInCart} disabled={true} />
          <button onClick={() => addtoCart(item)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
