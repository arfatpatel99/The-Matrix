import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PremiumAccess from "./pages/PremiumAccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<PremiumAccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
