import React from 'react';
import SkillItem from './SkillItem';
import '../styles/Skills.css'; 

import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/js.png';
import reactLogo from '../assets/logos/react.svg';
import nodeLogo from '../assets/logos/node.png';
import mongoLogo from '../assets/logos/mongo.png';
import vscodeLogo from '../assets/logos/vscode.png';
import githubLogo from '../assets/logos/git.png';
import figmaLogo from '../assets/logos/figma.png';

const Skills = () => {
  return (
<section id="skills-section">
  <h2>MES COMPÉTENCES</h2>

  <div className="skills-category-container">
    <h3>Langages</h3>
    <div className="skill-category">
      <SkillItem skillName="HTML" logo={htmlLogo} rating={4} />
      <SkillItem skillName="CSS" logo={cssLogo} rating={4} />
      <SkillItem skillName="JavaScript" logo={jsLogo} rating={2.5} />
      <SkillItem skillName="React.js" logo={reactLogo} rating={3} />
      <SkillItem skillName="Node.js" logo={nodeLogo} rating={2.5} />
      <SkillItem skillName="Mongo DB" logo={mongoLogo} rating={2.5} />
    </div>
  </div>

  <div className="skills-category-container">
    <h3>Outils</h3>
    <div className="skill-category">
      <SkillItem skillName="VS Code" logo={vscodeLogo} rating={4} />
      <SkillItem skillName="GitHub" logo={githubLogo} rating={4} />
      <SkillItem skillName="Figma" logo={figmaLogo} rating={3} />
    </div>
  </div>
</section>

  );
};

export default Skills;