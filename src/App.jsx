import React from "react";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
=======
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Aboutme from "./pages/Aboutme/Aboutme";

>>>>>>> version-2.0-react

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
=======
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<Aboutme />} />
        </Routes>
>>>>>>> version-2.0-react
    </>
  );
}

export default App;
