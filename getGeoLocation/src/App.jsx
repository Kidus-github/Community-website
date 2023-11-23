import { useState } from "react";

import "./App.css";
import { useGeolocation } from "./useGeolocation";

function App() {
  const [countClick, setCountClick] = useState(0);
  const {
    isLoading,
    position: { lat, lng },
    getPosition,
    error,
  } = useGeolocation();
  function handleClick() {
    setCountClick((count) => count + 1);
    getPosition();
  }
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>
      {isLoading && <p>Loading the position ...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{""}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}
      <p>you requested position{countClick} times</p>
    </div>
  );
}

export default App;
