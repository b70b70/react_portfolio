import React from 'react';
import Project from './Project';

function ProjectsPage() {
  // Create an array of project data or fetch it from an API
  const projects = [
    // Sample project data
    {
      title: 'Project 1',
      description: 'Description of project 1...',
      // Add more project details
    },
    {
      title: 'Project 2',
      description: 'Description of project 2...',
    },
    // Add more projects
  ];

  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
