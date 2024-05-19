import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Aboutme from "./pages/Aboutme/Aboutme";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<Aboutme />} />
    </Routes>
  );
}

export default App;
