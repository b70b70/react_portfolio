import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../projects.json';

function ProjectsPage() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Projects</h1>
      <p className="text-muted">Select a project below to view it.</p>
      <ul className="list-group">
        {projectData.map((project) => (
          <li key={project.id} className="list-group-item">
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
