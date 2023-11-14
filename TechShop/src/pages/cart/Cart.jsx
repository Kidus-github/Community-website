import React from "react";
import CartItem from "./CartItem";
import "./cart.css";
import { Navigate, useNavigate } from "react-router-dom";
function Cart({ cart, addtoCart, removeToCart, totalPrice }) {
  const itemInCart = cart.filter((item) => item.id);
  const navigate = useNavigate();
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
      {totalPrice > 0 ? (
        <div className="checkout">
          <p>SubTotal: ${totalPrice}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h3>Your cart is Empty</h3>
      )}
    </div>
  );
}

export default Cart;
