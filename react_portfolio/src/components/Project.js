import React from 'react';
import { Link } from 'react-router-dom';

function Project({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
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