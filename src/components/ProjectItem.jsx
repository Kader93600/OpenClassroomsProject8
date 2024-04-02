import React, { useState } from 'react';

const ProjectItem = ({ title, description, competence, imageUrl, projectUrl}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="project-item" onClick={handleFlip}>
      <div className={`project-card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="project-card-front">
          <img src={imageUrl} alt={title} className="project-image" />
        </div>
        <div className="project-card-back">
          <h2>{title}</h2>
          <h4>Description : </h4>
          <p>{description}</p>
          <h4>Compétence : </h4>
           <p dangerouslySetInnerHTML={{__html: competence}} />
          <a href={projectUrl} target="_blank" rel="noopener noreferrer"> Voir le projet</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
