
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { projectsData } from "../data.js";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Profile/>
      <About/>
      <Skills/>
      <Projects projects={projectsData}/>
      <Footer/>
    </div>
  );
};

export default HomePage;
