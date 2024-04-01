import React from 'react';
import '../styles/Header.css';


import mail from '../assets/logos/mail.png';
import projet from '../assets/logos/project_management.png';
import competences from '../assets/logos/skills.png';
import profil from '../assets/logos/man.png';

const Header = () => {
  return (
    <header>
      <div className="profile-container">
        <p>SI KADOUR ABDEL KADER</p>
      </div>
      <nav className="nav-mobile-hidden">
        <ul className="nav-links">
          <li><a href="#presentation">À propos de moi</a></li>
          <li><a href="#skills-section">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contactez-moi</a></li>
        </ul>
      </nav>
      <nav className="nav-desktop-hidden">
        <ul className="nav-icons">
          <li><a href="#presentation"> <img src={profil} alt="LogoProfil" /></a></li>
          <li><a href="#skills-section"><img src={competences} alt="LogoCompétence" /></a></li>
          <li><a href="#projects"><img src={projet} alt="LogoProjets" /></a></li>
          <li><a href="#contact"><img src={mail} alt="LogoMail" /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
