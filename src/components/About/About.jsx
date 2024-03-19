import React from "react";
import "./About.css";
<<<<<<< HEAD
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
=======

>>>>>>> version-2.0-react
function About() {
  return (
    <div id="about" className="py-3 m-0 bg-white">
      <div className="container mt-4 py-5">
        <div className="row mt-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              className="profile-image"
              src="./assets/aboutr.jpg"
              alt="Profile"
            />
          </div>
          <div className="col-md-6 d-flex align-items-start">
            <div className="about-content">
              <div className="fs-3">
                  <h2>Hi, I'm <span>Mansoor</span>🤚</h2> 
                  <h4>I'm a Software Developer.</h4>
                 <p> <span role="img" aria-label="email">📧 </span> mansoorpathikonda@gmail.com</p>
              </div>
<<<<<<< HEAD
              <div className="social-icons">
                <a href="https://www.codechef.com/users/mansoor07"><FaLinkedin className="icon" /></a>
                <a href="https://github.com/Mansoor-P"><BsGithub className="icon"/></a>
              </div>
              <p className="mt-2">
                <a
                  className="btn btn-outline-dark btn-lg "
=======
              <div className="social-icons"></div>
              <p>
                <a
                  className="btn btn-outline-dark btn-lg"
>>>>>>> version-2.0-react
                  href="https://drive.google.com/file/d/1IiaZyDoXDIM38-UGxEcnxSamJYq9snX2/view?usp=sharing"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
