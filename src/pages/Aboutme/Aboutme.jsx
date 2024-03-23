import React from "react";
import "./Aboutme.css";
import { projects, education } from "./aboutmeData";

const Aboutme = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4 mb-4">
        <div className="col-md-4 left ">
          <div className="left-side">
            <div className="profile">
              <img src="./assets/aboutr.jpg" alt="Mansoor" />
              <h4>Mansoor Pathikonda</h4>
            </div>
            <div className="profile-summary">
              <p>
                As a passionate and driven fresher, I am deeply committed to
                leveraging technology for positive change in the world. I
                believe that with innovation, dedication, and a strong sense of
                purpose, we can address critical issues, improve lives, and
                create a brighter future for everyone. I am eager to learn,
                grow, and contribute my skills and ideas to meaningful projects
                that make a difference and inspire others to join in the journey
                of transforming our world through technology. Passionate about
                changing the world with technology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 right border border-dark rounded   ">
          <div className="resume-header">
            <h1>Mansoor Pathikonda</h1>
            <div className="resume-header-links">
              <ul>
                <li>+91 9704039210</li>
                <li>
                  <a href="">mansoorpathikonda@gmail.com</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">GitHub</a>
                </li>
                <li>
                  <a href="">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="professional-summary">
            <h3>Professional Summary</h3>
            <p>
              Passionate fresh software developer skilled in building robust
              applications from scratch. Completed a project showcasing
              problem-solving abilities, experienced in various technologies,
              ready to contribute effectively to development teams.
            </p>
          </div>

          <hr />
          <div className="projects">
            <h3>Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="row mx-2 ">
                  <div className="col-8 project-title">
                    <h4>
                      {project.name}{" "}
                      <span>
                        <a href={project.liveDemoLink}>Live Demo</a>
                      </span>
                    </h4>
                  </div>
                  <div className="col-4">
                    <p> {project.timeframe}</p>
                  </div>
                  <ul className="mx-4">
                    <li className="mx-2">
                      {" "}
                      <p>{project.description}</p>
                    </li>
                    <li className="mx-2">
                      {" "}
                      <p>
                        <strong>Technologies:</strong>{" "}
                        {project.technologies.join(", ")}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="education">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="row mx-2 ">
                  <div className="col-10 education-title">
                    <h5>
                      {edu.degree}
                      <span>
                        {" - "}
                        {edu.percentage}
                      </span>
                    </h5>
                  </div>
                  <div className="col-2">
                    <p> {edu.timeframe}</p>
                  </div>
                  <p>
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills">
              <p>
                <strong>Languages: </strong> <mark>Java</mark> , SQL, HTML/CSS,
                JavaScript, React.js, Bootstrap, MongoDB
              </p>
            </div>
            <div className="skills">
              <p>
                {" "}
                <strong>Course Work: </strong>
                <mark> DSA – Data structures and Algorithms </mark>,{" "}
                <mark>Linux</mark> , Database Management System,{" "}
                <mark>System Design</mark>,Networking, Operating System,
                Relational Database, Full stack Development
              </p>
            </div>
            <div className="skills">
              <p>
                {" "}
                <strong>Developer Tools: </strong>
                IntelliJ, Vs-Code, <mark>Figma</mark> , Git, GitHub, My-SQL
                Workbench
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
