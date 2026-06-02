import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Gallery from '../components/ExpPinGallery';

// EV Grand Prix photos
import EV1 from '../assets/experience_gallery/GrandPrix/EV.JPEG';
import EV2 from '../assets/experience_gallery/GrandPrix/EV2.JPEG';
import EV5 from '../assets/experience_gallery/GrandPrix/EV5.JPEG';
import EV6 from '../assets/experience_gallery/GrandPrix/EV6.JPEG';

// J&J / Data Mine photos
import JJ1 from '../assets/experience_gallery/DataMine/J&J.JPEG';

// Northwest Nuclear Labs photos
import NWNL1 from '../assets/experience_gallery/NWNL/NWNL1.jpg';
import NWNL2 from '../assets/experience_gallery/NWNL/NWNL2.JPEG';
import NWNL3 from '../assets/experience_gallery/NWNL/NWNL3.JPEG';

const technicalExperiences = [
  {
    id: 1,
    dateTotal: 'August 2025 - April 2026',
    title: 'MCS Developer',
    company: 'Johnson & Johnson + Purdue Data Mine',
    companyDesc: 'The Purdue Data Mine Corporate Partners program pairs student teams with industry sponsors to solve real-world data science and engineering challenges.',
    location: '📍West Lafayette, IN',
    link: 'https://datamine.purdue.edu/johnson-johnson/',
    skills: ['React', 'Python', 'Monte Carlo Simulation', 'Generative AI', 'Statistical Modeling', 'R Shiny', 'Data Analysis', 'Agile'],
    roles: [
      {
        title: 'MCS Developer',
        date: 'August 2025 - April 2026',
        description: '- Built a Monte Carlo simulation web application to probabilistically forecast clinical trial enrollment timelines across global sites, improving forecasting accuracy to reduce trial delays.\n - The application integrates Monte Carlo simulations and generative AI to estimate patient enrollment rates, site dropouts, trial timelines, and more — enabling trial managers to optimize resource allocation and reduce delays.\n - Built an intuitive interactive interface for researchers to explore projections and automatically generate reports, bridging the gap between complex statistical modeling and practical trial operation planning.'
      }
    ],
    newsLinks: [],
    collage: [JJ1]
  },
  {
    id: 2,
    dateTotal: 'August 2025 - January 2026',
    title: 'PPML Undergraduate Researcher',
    company: 'Purdue Vertically Integrated Projects',
    companyDesc: 'The Privacy-Preserving Machine Learning (PPML) VIP group integrates multiple PPML research repositories into a single application, enabling clients to use models while protecting sensitive data and quantifying training data vulnerability.',
    location: '📍West Lafayette, IN',
    link: 'https://engineering.purdue.edu/VIP',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Influence Functions', 'GPU Computing', 'MNIST', 'CIFAR-10', 'ResNet'],
    roles: [
      {
        title: 'Undergraduate Researcher',
        date: 'August 2025 - January 2026',
        description: '- Extended influence function research for privacy-preserving ML, adapting TensorFlow pipelines to calculate training-point influence and loss sensitivity across non-convex models.\n - Reproduced and extended Blackbox influence function studies across MNIST, CIFAR-10, and ResNet20 datasets — estimating how individual training points impact model predictions using gradients and Hessian vectors.\n - Integrated research into the Landseer multi-stage ML defense pipeline to quantify training-set attack susceptibility, and optimized GPU-based training times and inference pipelines.'
      }
    ],
    newsLinks: ['https://github.com/anaiysaa/BlackBox_InfluenceFunctions'],
    collage: ''
  },
  {
    id: 3,
    dateTotal: 'June 2025 - August 2025',
    title: 'Software Engineering Intern - Team Lead',
    company: 'Quadrant Technologies',
    companyDesc: '',
    location: '📍Seattle, WA',
    link: 'https://www.quadranttechnologies.com/',
    skills: ['Team Mangement','Product Manegment', 'Fullstack Development', 'DevOps/Cloud', 'Azure AI', 'Python', 'Flask', 'JavaScript', 'React', 'Tailwind', 'SQL', 'PowerBI', 'Azure', 'Git'],
    roles: [
      {
        title: 'Software Engineering Intern - Team Lead',
        date: 'June 2025 - August 2025',
        description: '- Led a team to design and deploy a full-stack company portal web app with React frontend and Python Flask backend on Azure App Service, ensuring secure backend database communication. \n -Integrated Azure AI Services (GPT-4, Deepseek R1) for AI text classification, document parsing, and assistant chatbot using prompt design, context orchestration, and RAG workflows. \n -Processed structured and unstructured data with Python and SQL in Azure Data Studio, enabling real-time queries and insights.'
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
    skills: ['Python', 'Javascript', 'Git', 'AWS CDKs', 'DevOps'],
    roles: [
      {
        title: 'Software Engineering Intern',
        date: 'May 2025 - June 2025',
        description: '- Managed open-source publishing and maintenance of Adapts AI’s AWS CDK construct libraries. \n - Performed code security reviews to ensure compliance with best practices and vulnerability standards. \n - Oversaw repository development, including versioning, npm publishing, dependency updates, and documentation improvements.'
      }
    ],
    newsLinks: [],
    collage: ''
  },
  {
    id: 5,
    dateTotal: 'February 2025 - May 2025',
    title: 'Operations Member',
    company: 'Purdue Vertically Integrated Projects - Lady Elizabeth EV Kart Team + Toyota',
    companyDesc: 'Lady Elizabeth is one of three EV Grand Prix kart teams for the Mitch Daniels School Of Business, Integrated Business Engineering Program',
    location: '📍West Lafayette, Indiana',
    link: 'https://engineering.purdue.edu/VIP',
    skills: ['Electrical Systems', 'Mechanical Systems', 'Teamwork', 'Problem Solving'],
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
    collage: [EV1, EV2, EV5, EV6],
  },
  {
    id: 6,
    dateTotal: 'February 2022 - June 2024',
    title: 'Student Research Technician',
    company: 'Northwest Nuclear Laboratories',
    companyDesc: '',
    location: '📍Federal Way, WA',
    link: '',
    skills: ['C++', 'Azure', 'SQL', 'Electrical Systems', 'Data Acquisition', 'LabJack', 'DAQFactory'],
    roles: [
      {
        title: 'Student Research Technician',
        date: 'February 2022 - June 2024',
        description: '- Engineered data pipelines (DAQFactory & Azure) for reactor telemetry, accelerating research analysis.\n - Built LabJack control systems managing thermionic emission, plasma levels, and radiation output for BCNT research.\n - Worked on a nuclear reactor design focused on thermionic emission mitigation and sporadic electrical output mitigation.'
      }
    ],
    newsLinks: [],
    collage: [NWNL1, NWNL2, NWNL3],
  },
];

const leadershipExperiences = [
  {
    id: 8,
    dateTotal: 'May 2026 - Present',
    title: 'CS Team Lead & Social Media Liaison',
    company: 'Purdue Women in Science Program (WiSP)',
    companyDesc: 'WiSP is a Purdue program dedicated to supporting and empowering women in STEM through community, mentorship, and professional development.',
    location: '📍West Lafayette, IN',
    link: 'https://www.purdue.edu/science/wisp/',
    skills: ['Leadership', 'Event Planning', 'Mentorship', 'Social Media', 'Marketing', 'Outreach'],
    roles: [
      {
        title: 'Computer Science Team Lead & Social Media Liaison',
        date: 'May 2026 - Present',
        description: '- Planning events in educational, professional, and social development for 200+ students in the 2026–2027 cohort.\n- Managing professional speaker recruitment and alumni outreach, as well as mentor training.\n- Working with Purdue College of Science marketing department to oversee Social Media and Newsletter committees; expanding program reach, brand awareness, and highlighting member achievements.'
      },
      {
        title: 'Mentor & Social Board Member',
        date: 'August 2025 - May 2026',
        description: '- Organized 8+ community-building events with the Social Board for 200+ WiSP participants in 2025–2026.\n- Mentored first-year STEM students, providing academic guidance and career support.'
      }
    ],
    newsLinks: [],
    collage: ''
  },
  {
    id: 7,
    dateTotal: 'September 2022 - Present',
    title: 'Student Advisory Board Member',
    company: 'Women Advancing Tomorrows Technologists (WATT)',
    companyDesc: 'Women Advancing Tomorrows Technologists (WATT) is a non-profit dedicated to introducing girls to computer science at a young age.',
    location: '📍Seattle, WA',
    link: 'https://www.wattcoding.com/',
    skills: ['Team Management', 'HTML', 'CSS', 'JavaScript', 'Python', 'Java'],
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
        <h2>Experience</h2>

        <div className="timeline-container">
          <div className="section-divider">
            <span className="section-divider-label">Technical Experience</span>
          </div>
          <div className="timeline">
            {technicalExperiences.map((exp) => (
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

          <div className="section-divider">
            <span className="section-divider-label">Leadership & Volunteering</span>
          </div>

          <div className="timeline">
            {leadershipExperiences.map((exp) => (
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
                      <span key={i}>{line}<br /></span>
                    ))}
                  </a>
                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-bubble">{skill}</span>
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
          <div className="top">
            <div className="right full-width">
            <h1>
              <a
                href={activePopup.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#121111',
                  textDecoration: 'none',
                  fontWeight: 'normal',
                  fontSize: '25px',
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

            <b >{activePopup.location}</b>
            <p style={{ marginBottom: '10px', marginTop: '10px', }}>{activePopup.companyDesc}</p>

    
            {activePopup.roles?.map((role, i) => (
              <div key={i} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '20px',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{role.title}</span>
                  <span style={{ fontFamily: 'Cutive Mono', fontSize: '14px', marginTop: '4px' }}>{role.date}</span>
                </div>
                <div style={{ marginTop: '10px' }}>
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
              <p style={{ fontSize: '20px', fontFamily: 'Old Standard TT', }}>Skills & Tools: </p>
              {activePopup.skills.map((skill, i) => (
                <span key={i} className="popup-skill-bubble">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {activePopup.collage?.length > 0 && (
            <div className="left">
              <Gallery images={activePopup.collage} />
            </div>
          )}
          </div>
          {activePopup.newsLinks?.length > 0 && (
              <p style={{ fontSize: '20px', fontFamily: 'Old Standard TT', }}>
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
                    marginBottom: '10px',
                    fontSize: '10px',
                    paddingLeft: '10px',
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