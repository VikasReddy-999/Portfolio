import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default LandingPage;
