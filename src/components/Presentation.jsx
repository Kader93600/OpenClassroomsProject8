import React from 'react';
import '../styles/Presentation.css';
import CV from '../assets/cv/CV.pdf';
import ProfilImg from '../assets/profil/pp.jpg'; 

function Presentation() {
  return (
    <section id="presentation">
      <div className="presentation-content">
        <div className="bio-image-container">
          <img src={ProfilImg} alt="Profil" className="bio-image" />
        <div className="cv-download">
          <a href={CV} download="SI_KADDOUR_Abdel_Kader_CV.pdf">
            <button type="button">Télécharger mon CV</button>
          </a>
        </div>
        </div>
        <div className="bio">
          <h2>À PROPOS DE MOI 😬</h2>
          <p>
          Bonjour, je suis SI KADDOUR Abdel Kader, un développeur web de 27 ans passionné et toujours en quête de connaissances. <br /><br />
          Diplômé d'OpenClassrooms, j'ai acquis des compétences diverses en développement web et réalisé plusieurs projets. <br />
          Ma passion pour le développement et la technologie me pousse à rester informé des dernières innovations. <br /><br />
          Je cherche actuellement des opportunités d'alternance ou des postes de niveau junior pour continuer à apprendre et contribuer avec ma perspective unique. <br /><br />
          Mon portfolio illustre mon engagement et mon désir de participer à des projets innovants et significatifs.<br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
