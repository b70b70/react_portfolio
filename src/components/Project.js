import React from 'react';

function Project({ project }) {
  return (
    <div className="bg-primary">
      <h2>{project.title}</h2>
      <p>{project.description}</p> {/* Display the description */}
      <p>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Version
        </a>
      </p>
      <p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
      <img src={project.image} alt={project.title} />
    </div>
  );
}

export default Project;
