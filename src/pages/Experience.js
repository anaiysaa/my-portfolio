import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NWNL from '../assets/images/NWNL.png';
import EV from '../assets/images/evCollage.png';
import PhotoGallery from '../assets/images/photo gallery.png'

const experiences = [
  {
    id: 1,
    dateTotal: 'August 2025 - Present',
    title: 'MCS Developer',
    company: 'Johnson & Johnson + Purdue Data Mine',
    companyDesc: 'Still in progress... more information coming soon!',
    location: '📍West Lafayette, IN',
    link: 'https://crp.the-examples-book.com/mcs-363/',
    skills: ['Python', 'APIs', 'Azure', 'SQL'],
    roles: [
      {
        title: 'MCS Developer',
        date: 'August 2025 - Present',
        description: 'Developing an interactive R Shiny application to simulate, plan, and forecast clinical trial patient enrollment. Integrating statistical modeling and simulation-based methodologies to improve recruitment forecasting accuracy.'
      }
    ],
    newsLinks: [],
    collage: ''
  },
  {
    id: 2,
    dateTotal: 'August 2025 - Present',
    title: 'Undergraduate Research Assistant',
    company: 'Purdue Vertically Integrated Projects',
    companyDesc: 'Still in progress... more information coming soon!',
    location: '📍West Lafayette, IN',
    link: '',
    skills: ['Python', 'C++', 'Git', 'DevOps'],
    roles: [
      {
        title: 'Undergraduate Research Assistant',
        date: 'August 2025 - Present',
        description: 'Building privacy-preserving Machine Learning application using cryptography and GPU inference computations, enabling clients to use models without revealing inputs or model parameters.'
      }
    ],
    newsLinks: [],
    collage: ''
  },
  {
    id: 3,
    dateTotal: 'June 2025 - August 2025',
    title: 'Software Engineering Intern',
    company: 'Quadrant Technologies',
    companyDesc: '',
    location: '📍Seattle, WA',
    link: 'https://www.quadranttechnologies.com/',
    skills: ['JavaScript', 'React', 'APIs', 'AWS CDK', 'Git'],
    roles: [
      {
        title: 'Software Engineering Intern',
        date: 'June 2025 - August 2025',
        description: 'in progress... more information coming soon!'
      }
    ],
    newsLinks: [],
    collage: ''
  },
  {
    id: 4,
    dateTotal: 'May 2025 - June 2025',
    title: 'Software Engineering Intern',
    company: 'Adapts.ai',
    companyDesc: '',
    location: '📍Seattle, WA',
    link: 'https://adapts.ai/',
    skills: ['Python', 'Flask', 'MongoDB', 'APIs', 'CI/CD'],
    roles: [
      {
        title: 'Software Engineering Intern',
        date: 'May 2025 - June 2025',
        description: 'in progress... more information coming soon!'
      }
    ],
    newsLinks: [],
    collage: ''
  },
  {
    id: 5,
    dateTotal: 'February 2025 - Present',
    title: 'Operations Member',
    company: 'Purdue Vertically Integrated Projects - Lady Elizabeth EV Kart Team',
    companyDesc: 'Lady Elizabeth is one of three EV Grand Prix kart teams for the Mitch Daniels School Of Business, Integrated Business Engineering Program',
    location: '📍West Lafayette, Indiana',
    link: 'https://business.purdue.edu/centers/dcmme/experiential-learning/ibe-ev-gokart/home.php',
    skills: ['Power BI', 'Azure Data Studio', 'DevOps'],
    roles: [
      {
        title: 'Operations Team Member (2025 EV Grand Prix)',
        date: 'February 2025 - April 2025',
        description: '- Worked with the operations team alongside Toyota sponsors to help design and construct an Electric Kart for the Purdue EV Grand Prix. \n - Placed 1st in the race, 1st in design evaluations, and 3rd in efficiency evaluations, winning the overall championship.'
      }
    ],
    newsLinks: [
      'https://www.purdueexponent.org/campus/features/lady-elizabeth-makes-history-as-first-all-women-team-to-win-evgrand-prix/article_4fccbdf3-a054-4f59-867f-41415d78426a.html',
      'https://www.linkedin.com/posts/purduebusiness_lady-elizabeth-ugcPost-7320108834809671680-afbS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-AyMcBvzzO54CXPpzeTEW0Nb2SOv-RGYM',
      'https://www.linkedin.com/posts/dauch-center-for-the-management-of-manufacturing-enterprises_dauchcenter-womeninstem-vipgokart-ugcPost-7316523152736407553-XP3z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-AyMcBvzzO54CXPpzeTEW0Nb2SOv-RGYM'
    ],
    collage: EV
  },
  {
    id: 6,
    dateTotal: 'February 2022 - June 2024',
    title: 'Student Research Technician',
    company: 'Northwest Nuclear Laboratories',
    companyDesc: '',
    location: '📍Federal Way, WA',
    link: 'https://www.nwnlabs.org/',
    skills: ['Python', 'C++', 'Azure', 'SQL', 'APIs'],
    roles: [
      {
        title: 'Student Research Technician',
        date: 'February 2022 - June 2024',
        description: '- Researched new plasma production through nuclear fusion, working towards increasing efficiency of energy production. \n - Worked on a new nuclear reactor design based around thermionic emission mitigation and sporadic electrical output mitigation. \n - Updated and developing nuclear reactor telemetry, which includes data acquisition and display through DAQfactory and LabJack software, stored on Azure data storage.'
      }
    ],
    newsLinks: [],
    collage: NWNL
  },
  {
    id: 7,
    dateTotal: 'September 2022 - Present',
    title: 'Student Advisory Board Member',
    company: 'Women Advancing Tomorrows Technologists (WATT)',
    companyDesc: 'Women Advancing Tomorrows Technologists (WATT) is a non-profit dedicated to introducing girls to computer science at a young age.',
    location: '📍Seattle, WA',
    link: 'https://www.wattcoding.com/',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java'],
    roles: [
      {
        title: 'Student Advisory Board Member',
        date: 'August 2024 – Present',
        description: '- Mentoring current student core team and collaborating with board members to increase non-profit visibility.'
      },
      {
        title: 'Core Team Lead',
        date: 'June 2023 – August 2024',
        description: '- Led a team of 6 students to design, deliver, and market eight-week programming classes in Python, HTML/CSS, and Arduino electronics programming for K-8 girls.'
      },
      {
        title: 'Coding Instructor',
        date: 'September 2022 – June 2023',
        description: '- Led computer science classes for K-12 girls in the greater Seattle area. Topics included Java, Python, CSS, HTML, and web development.'
      }
    ],
    newsLinks: [],
    collage: ''
  }
];

function Experience() {
  const [activePopup, setActivePopup] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActivePopup(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0, once: false});
  }, []);

  return (
    <div className="experience-wrapper">
      <div className="experience-panel-full">
        <h2>Technical Experience</h2>

        <div className="timeline-container">
          <div className="timeline">
            {experiences.map((exp) => (
              <div
                className="timeline-item"
                key={exp.id}
                data-aos="fade-up"
              >
                <div className="timeline-date">{exp.dateTotal}</div>
                <div className="timeline-title-wrapper" onClick={() => setActivePopup(exp)}>
                  <div className="timeline-title">{exp.title}</div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-company-link"
                  >
                    {exp.company.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </a>
                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-bubble">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activePopup && (
        <div
          className={`popup-overlay ${isClosing ? 'fade-out' : ''}`}
          onClick={handleClose}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h1>
              <a
                href={activePopup.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#121111',
                  textDecoration: 'none',
                  fontWeight: 'normal',
                }}
              >
                {activePopup.company.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </a>
            </h1>

            <b>{activePopup.location}</b>
            <p>{activePopup.companyDesc}</p>

    
            {activePopup.roles?.map((role, i) => (
              <div key={i} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '20px',
                    fontFamily: 'Lora',
                  }}
                >
                  <span>{role.title}</span>
                  <span style={{ fontStyle: 'italic' }}>{role.date}</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  {role.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="popup-skills">
              <p style={{ fontSize: '20px', fontFamily: 'Lora' }}>Skills & Tools: </p>
              {activePopup.skills.map((skill, i) => (
                <span key={i} className="popup-skill-bubble">
                  {skill}
                </span>
              ))}
            </div>

            {activePopup.collage && (
              <div className="popup-collage">
                <img src={activePopup.collage} alt="Collage" />
              </div>
            )}

            {activePopup.newsLinks?.length > 0 && (
              <p style={{ fontSize: '20px', fontFamily: 'Lora' }}>
                Publications & Posts:
              </p>
            )}

            {activePopup.newsLinks?.map((newsLink, i) => (
              <div key={i}>
                <a
                  href={newsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    color: '#518ca5',
                    textDecoration: 'underline',
                    fontWeight: '500',
                    marginBottom: '20px',
                  }}
                >
                  {newsLink}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;