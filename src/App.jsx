import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white flex flex-col">
        <Navbar />

        {/* Main Page */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
