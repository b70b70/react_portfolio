
import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../projects.json';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>
        <a href={project.deployedLink}>Deployed Version</a>
      </p>
      <p>
        <a href={project.githubLink}>GitHub Repository</a>
      </p>
      <img src={project.image} alt={project.title} />
    </div>
  );
}

export default ProjectDetail;
