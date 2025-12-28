import React, { useEffect } from 'react';
import '../styles/Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from '../components/PinterestGallery';
const educationData = [
  {
    id: 1,
    dateTotal: 'August 2024 - May 2028',
    school: 'Purdue University',
    degree: 'B.S. Computer Science, Minor in Entrepreneurship',
    gpa: 'GPA: 3.6',
    location: '📍West Lafayette, IN',
    link: 'https://www.purdue.edu/',
    concentrations: ['AI/Machine Learning', 'Computational Systems Engineering', 'Software Engineering'],
    organizations: ['Women In Science Program - Mentor & Social Board', 'Data Mine - Corporate Partners', 'VIP Undergraduate Research', 'EV Grand Prix', 'Semester Honors + Deans List x2'],
    courses: {
      'Computer Science': [
        'Problem Solving & O-O Programming',
        'CS Tools',
        'Foundations of Comp Sci',
        'Programming in C',
        'Data Structures & Algorithms',
        'Computer Architecture',
        'Systems Programming',
        'Operating Systems',
        'Analysis of Algorithms'
      ],
      'Mathematics': [
        'Multivariate Calculus 1-3',
        'Linear Algebra',
        'Ordinary Differential Equations',
        'Statistical Methods',
        'Probability Theory'
      ]
    }
  },
  {
    id: 2,
    dateTotal: 'August 2020 - May 2024',
    school: 'Holy Names Academy',
    degree: 'High School Diploma',
    gpa: 'GPA: 4.3',
    location: '📍Seattle, WA',
    link: 'https://www.holynames-sea.org/',
    concentrations: [],
    organizations: [
      'ASB Board',
      'Future Business Leaders Of America - Chapter President',
      'Swim - Team Captain',
      'Varsity Mock Trial - VP',
      'National Honor Society Scholar',
      'Academy Ambassador Officer',
      'Orchestra - First Chair Clarinet',
      'Robotics',
    ],
  }
];

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0, once: false });
  }, []);

  return (
    <div className="education-wrapper">
      <div className="education-panel-full">
        Education
        
        <div className="education-boxes-container">
          <div className="education-left">
            <div
              key={educationData[0].id}
              className="education-box purdue-box"
              data-aos="fade-up"
            >
              <div className="education-header">
                <a
                  href={educationData[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-school-link"
                >
                  {educationData[0].school}
                </a>
                <div className="education-date">{educationData[0].dateTotal}</div>
                <div className="education-degree">{educationData[0].degree}</div>
                <div className="education-gpa">{educationData[0].gpa}</div>
                <div className="education-location">{educationData[0].location}</div>
              </div>

              <div className="education-section">
                <div className="concentrations">
                    <h4>Concentrations:</h4>
                    <a>Machine Learning, Software Engineering, Computater Engineering </a>
                  </div>
                <h4>Organizations:</h4>
                <div className="education-tags">
                  {educationData[0].organizations.map((org, i) => (
                    <span key={i} className="education-tag organization-tag">
                      {org}
                    </span>
                  ))}
                </div>
              </div>

              <div className="education-section">
                
              </div>
            </div>
          </div>

          <div className="education-left">
            <div
              key={educationData[1].id}
              className="education-box high-school-box"
              data-aos="fade-up"
            >
              <div className="education-header">
                <a
                  href={educationData[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-school-link"
                >
                  {educationData[1].school}
                </a>
                <div className="education-date">{educationData[1].dateTotal}</div>
                <div className="education-degree">{educationData[1].degree}</div>
                <div className="education-gpa">{educationData[1].gpa}</div>
                <div className="education-location">{educationData[1].location}</div>
              </div>
              <div className="education-section">
                <h4>Organizations:</h4>
                <div className="education-tags">
                  {educationData[1].organizations.map((org, i) => (
                    <span key={i} className="education-tag organization-tag">
                      {org}
                    </span>
                  ))}
                </div>
              </div>
                <div className="education-section">
                  <div className="additional-programs">
                    <h4>Pre-College Program:</h4>
                    <a
                      href="https://www.cmu.edu/pre-college/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Python & Data Science, CMU
                    </a>
                    <b>- Summer 2022</b>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}

export default Education;