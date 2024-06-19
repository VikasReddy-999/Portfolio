import React from 'react';

function ProjectCard({ project }) {
  const { title, description, cloneLink, liveDemo, languages } = project;

  return (
    <div>
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
      <a href={cloneLink} target="_blank" rel="noopener noreferrer">Clone Link</a>
      <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language.name}: {language.percentage}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
