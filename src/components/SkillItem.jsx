import React from 'react';
import RatingStars from '../components/RatingStars'; // Ajustez le chemin selon votre structure de dossier


const SkillItem = ({ skillName, logo, rating }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt={`${skillName} logo`} className="skill-logo" />
      <p className="skill-name">{skillName}</p>
      <div className="skill-rating">
        <RatingStars
          count={5}
          value={rating}
          size={24}
          activeColor="#ffd700"
          isHalf={true}
          edit={false}
        />
      </div>
    </div>
  );
};

export default SkillItem;
