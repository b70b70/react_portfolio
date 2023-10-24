import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more project details */}
    </div>
  );
}

export default Project;
