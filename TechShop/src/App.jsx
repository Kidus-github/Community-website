import { useState } from "react";
import NavBar from "./components/NavBar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  let totalPrice = getTotalPrice();

  function addtoCart(itemToAdd) {
    console.log(itemToAdd);
    setCart([...cart, { ...itemToAdd }]);
  }
  function removeToCart(itemToRemove) {
    console.log(itemToRemove);
    let found = false;

    setCart(
      cart.filter((item) => {
        if (item.id === itemToRemove.id && !found) {
          found = true;
          return false;
        }
        return true;
      })
    );
  }
  function getTotalPrice() {
    let total = 0;
    cart.map((item) => total + Number(item.price));
    console.log("called");
    return total;
  }
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <Shop
                addtoCart={addtoCart}
                cart={cart}
                products={products}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                addtoCart={addtoCart}
                removeToCart={removeToCart}
                totalPrice={totalPrice}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
