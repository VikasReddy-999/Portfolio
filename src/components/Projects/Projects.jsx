import React from "react";
import { projectsData } from "./data"; // Importing projectsData from data.js
import "./Projects.css"; // Importing the CSS file for styling

const LanguageBadge = ({ language }) => (
  <a href={language.link} target="_blank" rel="noopener noreferrer">
    <span className="badge bg-light text-dark">{`${language.name}: ${language.percentage}`}</span>
  </a>
);

const ProjectLinkButton = ({ link, text }) => (
  <a href={link} target="_blank" className="btn btn-outline-secondary mx-2">
    <i className="fab fa-github"></i> {text}
  </a>
);

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h1 className="projects-heading text-center mb-4">Recent Projects</h1>
      <div className="row">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-6 mb-4">
            <div className="card shadow-lg p-3 bg-white rounded custom-card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-grid gap-2 d-md-block">
                  <ProjectLinkButton
                    link={project.cloneLink}
                    text="Clone Project"
                  />
                  <ProjectLinkButton link={project.liveDemo} text="Live Demo" />
                </div>
                <hr />
                <div className="projects-techs pb-3">
                  <p>Technologies:</p>
                  {project.languages.map((language, index) => (
                    <LanguageBadge key={index} language={language} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
