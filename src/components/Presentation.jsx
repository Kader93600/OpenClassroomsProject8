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
          Bonjour, je suis SI KADDOUR Abdel Kader 😊, un (très) jeune développeur web de 27 ans animé par une insatiable faim d'apprendre et une passion profonde pour le développement et la technologie en général. <br />
          Ayant complété ma formation chez OpenClassrooms, je me suis immergé dans le monde du développement web,
          gagnant des notions dans différents langages et technologies, et appliquant ces connaissances à travers plusieurs projets. <br /><br />
          Cette soif d'apprendre m'a non seulement permis de maîtriser les outils et techniques actuels,
          mais elle m'encourage également à rester en veille constante sur les innovations technologiques. <br /> <br />
          Actuellement, je suis particulièrement ouvert à des opportunités d'alternance ou à des postes de niveau junior. <br />
          Je suis convaincu que ces expériences me permettraient non seulement de poursuivre ma courbe d'apprentissage, 
          mais aussi d'apporter une valeur ajoutée grâce à ma perspective unique et mon engagement envers l'excellence dans le développement web. <br /><br />
          Mon portfolio est une vitrine de mon engagement, reflétant à la fois mes réalisations passées et mon désir ardent de relever les défis futurs.
          Je suis ouvert à explorer de nouvelles opportunités pour appliquer ma passion et mon expertise à des projets innovants et impactants.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
