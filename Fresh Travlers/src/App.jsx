import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Pack from "./pages/Pack";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/pack" element={<Pack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
