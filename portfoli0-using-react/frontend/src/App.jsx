import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import WelcomeMessage from "./components/WelcomeMessage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <WelcomeMessage />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
