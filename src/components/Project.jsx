import React from 'react';
import ProjectItem from './ProjectItem';
import '../styles/Projects.css'; 

import booki from '../assets/projects/booki.jpg';
import nina from '../assets/projects/nina.png';
import kasa from '../assets/projects/kasa.png';
import sophie from '../assets/projects/sophiebluel.png'
import monvieuxgrimoire from '../assets/projects/monvieuxgrimoire.png';


const Project = () => {

  const projects = [
    {
      title: 'Booki',
      description: "Ce premier projet technique de la formation permettant de créer une page web statique et responsive. Il m'a permis d'apprendre les langages HTML et CSS, mais également à me familiariser avec les outils tels que VsCode, GitHub et Figma.",
      imageUrl: booki,
      projectUrl: 'https://github.com/Kader93600/OpenClassroomsProject2',
      competence:"✅Installer un environnement de développement front-end <br> ✅Intégrer du contenu conformément à une maquette avec HTML & CSS <br> ✅Implémenter une interface responsive avec HTML & CSS <br> ✅Versionner son projet avec Git et Github"
    },
    {
      title: "Sophie Bluel",
      description: "Un projet qui m'a permis de m'initié à JavaScript. En partant d'une page statique, j'ai du mettre en place la connexion de l'utilisatrice, et l'accès à ses projets via une modale. Projet plus complexe qui m'a demandé des recherches approfondis sur Internet pour pouvoir le mener à bien et réussir à implémenter les modales.",
      imageUrl: sophie,
      projectUrl: 'https://github.com/Kader93600/OpenClassroomsProject3',
      competence:"✅Manipuler les éléments du DOM avec JavaScript <br> ✅ Gérer les évènements utilisateurs avec JavaScript <br> ✅ Récupérer les données utilisateurs via des formulaires"
    },
    {
      title: 'Nina Carducci',
      description: " Ce projet différent des autres m'a demandé de la réflexion et l'étude du code pour pouvoir corriger certains bugs de modale et de filtres. J'ai du réalisé également l'optimisation du code pour améliorer les notes de performances, l'accessibilité et le référencement du site. ",
      imageUrl: nina,
      projectUrl: 'https://github.com/Kader93600/OpenClassroomsProject5',
      competence:"✅Optimiser les performances, le référencement et l'accessibilité d'un site web <br> ✅Débugger un site web grâce aux Chrome DevTools <br> ✅Rédiger un cahier de recette pour tester un site"
    },
    {
      title: 'Kasa',
      description: "Ce projet m'a permis de découvrir le nouveau langage React. J'ai du coder l'application en React.Js pour obtenir un résultat fonctionnel, responsive et conforme à la maquette. Après avoir initialisé l'application avec Create React App et installé React Router j'ai pu crée la logique de routage avant de passer aux différentes pages de l'application.",
      imageUrl: kasa,
      projectUrl: 'https://github.com/Kader93600/OpenClassroomsProject6',
      competence:"✅Développer des éléments de l'interface d'un site web grâce à des composants React <br> ✅Initialiser une application avec Create React App <br> ✅Configurer la navigation entre les pages de l'application avec React Router"
    },
    {
      title: 'Mon Vieux Grimoire',
      description: "J'ai conçu le back-end d'un site de notation de livres avec Node.js et MongoDB, intégrant sécurité des données, authentification sécurisée, et gestion CRUD. J'ai optimisé les images et appliqué le Green Code pour réduire l'impact écologique, le tout dans une architecture MVC.",
      imageUrl: monvieuxgrimoire,
      projectUrl: 'https://github.com/Kader93600/OpenClassroomsProject7',
      competence:"✅ Implémenter un modèle logique de données conformément à la réglementation <br> ✅ Mettre en œuvre des opérations CRUD de manière sécurisée <br> ✅ Stocker des données de manière sécurisée "
    },

  ];

  return (
    <div id='projects'>
        <div className='project-title'>
          <h2>MES PROJETS </h2>
        </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectItem 
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            competence={project.competence}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
