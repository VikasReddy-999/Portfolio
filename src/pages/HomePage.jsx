
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { projectsData } from "../data.js";
// import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Profile/>
      <About/>
      <Skills/>
      <Projects projects={projectsData}/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
};

export default HomePage;
