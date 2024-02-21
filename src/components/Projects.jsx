// Projects.jsx
import React from "react";
import "../App.css";

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

const Projects = ({ projects }) => {
  return (
    <div id="projects" className="row m-4">
      <h1 className="projects-heading">Recent Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded custom-card">
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
              <div className="pb-3">
                <p>Languages:</p>
                {project.languages.map((language, index) => (
                  <LanguageBadge key={index} language={language} />
                ))}
              </div>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
