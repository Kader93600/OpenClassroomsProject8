import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="social-links-footer">
        <a href="https://github.com/Kader93600" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/abdel-kader-si-kaddour-91a0b317a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} />
        </a>
      </div>
      <div className="contact-info">
        <p>SI KADDOUR Abdel Kader</p>
        <p>abdelkadersikaddour@gmail.com</p>
        <p>+33 6 52 59 59 32</p>
      </div>
    </footer>
  );
};

export default Footer;
