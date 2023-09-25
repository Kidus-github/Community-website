import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      messages={["Bad", "Fine", "Okay", "Good", "Amazing"]}
    /> */}
  </React.StrictMode>
);
