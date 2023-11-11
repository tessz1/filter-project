import React from 'react';
import "../App.css"
function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className='project-item'>
          <img src={project.img} alt={project.category} />
          <h3>{project.category}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
