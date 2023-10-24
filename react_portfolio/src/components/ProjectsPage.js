import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../projects.json';
import Project from './Project';

function ProjectsPage() {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {projectData.map((project) => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
        <hr />
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    );
  }
  
  export default ProjectsPage;