import React from "react";
import CartItem from "./CartItem";
import "./cart.css";
function Cart({ cart, addtoCart, removeToCart, totalPrice }) {
  const itemInCart = cart.filter((item) => item.id);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {cart
          .filter(
            (item, index, self) =>
              self.findIndex((t) => t.id === item.id) === index
          )
          .map((item, i) => (
            <CartItem
              key={i}
              item={item}
              itemInCart={itemInCart}
              addtoCart={addtoCart}
              removeToCart={removeToCart}
            />
          ))}
      </div>
      <div className="checkout">
        <p>SubTotal: ${totalPrice}</p>
        <button> Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
