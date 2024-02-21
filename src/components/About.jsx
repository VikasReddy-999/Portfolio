import React from "react";

function About() {
  return (
    <div
      id="about"
      className="py-3 m-0"
      style={{ backgroundColor: "rgb(233, 236, 239)" }}
    >
      <div className="container mt-4 py-5"> 
        <div className="row mt-4">
          <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
            <img
              className="img-fluid border border-secondary rounded-circle"
              src="./assets/aboutr.jpg"
              alt="Profile picture"
            />
          </div>
          <div className="col-md-6 col-lg-7">
            <h2 className="display-4 mb-5 text-center">About Me</h2>
            <p className="fs-3  text-center">
              A dedicated student with a profound passion for software
              development. Eager to leverage my academic foundation and coding
              skills to contribute to innovative projects. I thrive in a
              collaborative environment and am committed to continuous learning.
              Excited about the opportunity to apply my knowledge, embrace
              challenges, and grow as a valuable member of a dynamic software
              development team.
            </p>
            <p className="text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href="https://drive.google.com/file/d/1IiaZyDoXDIM38-UGxEcnxSamJYq9snX2/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
