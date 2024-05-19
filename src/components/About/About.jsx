import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./About.css";

function About() {
  return (
    <div id="about" className="py-3 m-0 bg-white">
      <div className="container mt-4 py-5">
        <div className="row mt-4">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              className="profile-image"
              src="./assets/aboutr.jpg"
              alt="Profile"
            />
          </div>
          <div className="col-lg-6 d-flex align-items-start flex-column">
            <div className="about-content">
              <div className="fs-3">
                <h2>
                  Hi, I'm <span>Mansoor</span>
                </h2>
                <h4>Software Developer .</h4>
                <p >
                  
                 <a href="mailto: mansoorpathikonda@gmail.com"> mansoorpathikonda@gmail.com</a>
                </p>
              </div>
              <div className="social-icons mt-auto">
                <a
                  className="btn btn-outline-dark btn-lg mb-3"
                  href="../assets/MANSOOR_P.pdf"
                >
                  Resume
                </a>
                <a href="https://github.com/Mansoor-P" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/mansoor0731" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
