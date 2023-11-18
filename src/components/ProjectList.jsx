import React from 'react';
import "../styles/ProjectList.css"
function ProjectList({ projects }) {
  return (
    <div className='project-cards-container'>
    <div className='project-cards'>
      {projects.map((project, index) => (
        <div key={index} className='project-item'>
          <img src={project.img} alt={project.category} />
          {/* <h3>{project.category}</h3> */}
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProjectList;
