import React from 'react';
import ProjectItem from './ProjectItem';
import '../styles/Projects.css'; 

import projectsData from '../projects.json';

const Project = () => {
  return (
    <div id='projects'>
        <div className='project-title'>
          <h2>MES PROJETS </h2>
        </div>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <ProjectItem 
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={require(`../${project.imageUrl}`)} // Assurez-vous que le chemin est correct et accessible
            competence={project.competence}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
