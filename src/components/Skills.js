import React from 'react';
import '../styles/Skills.css';
const skillData = {
  'Front-End': [
    'CSS',
    'HTML',
    'JavaScript',
    'React',
    'R Shiny',
    'Tailwind'
  ],
  'Back-End': [
    'Python',
    'C',
    'C++',
    'Flask',
    'Java',
    'APIs',
    
  ],
  'Cloud & DevOps': [
    'AWS CDK',
    'Azure',
    'CI/CD',
    'DevOps',
    'Git'
  ],
  'Databases & More': [
    'Power BI',
    'SQL',
    'Azure Data Studio',
    'MongoDB',
  ],
};


const Skills = () => {
  return (
    <div className="skills-list-wrapper">
      <h2 className="skills-heading">Skills and Tools</h2>
      {Object.entries(skillData).map(([category, skills], index) => (
        <div className="skill-group" key={index}>
          <h3 className="skill-category">{category}</h3>
          <div className="skill-bubbles">
            {skills.map((skill, i) => (
              <span key={i} className="skill-bubble">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;