import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Pack from "./pages/Pack";
import "./style/App.css";

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
