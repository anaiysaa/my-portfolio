import React, { useEffect } from 'react';
import '../styles/Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    organizations: ['Women In Science Program - Mentor & Social Board', 'Data Mine Corporate Partners', 'EV Grand Prix'],
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
      'Assosiate Student Body Board',
      'Robotics',
      'Swim - Team Captain',
      'Varsity Mock Trial',
      'National Honor Society Scholar',
      'Future Business Leaders Of America - Chapter President',
      'Academy Ambassador Officer',
      'Orchestra - First Chair Clarinet',
    ],
  },
  {
    id: 3,
    dateTotal: 'Summer Program: June 2022 - August 2022',
    school: 'Carnegie Mellon University',
    degree: 'Pre College Program',
    gpa: '',
    location: '📍Pittsburgh, PA',
    link: 'https://www.cmu.edu/pre-college/',
    concentrations: [],
    organizations: [],
    courses: {
      'Programming': [
        'Fundamentals of Programming (Python)',
        'Reasoning with Data'
      ]
    }
  }
];

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0, once: false });
  }, []);

  return (
    <div className="education-wrapper">
      <div className="education-panel-full">
        <h2>Education</h2>
        
        <div className="education-boxes-container">
          <div className="education-left">
            <div
              key={educationData[0].id}
              className="education-box purdue-box"
              data-aos="fade-up"
            >
              <div className="education-header">
                <div className="education-date">{educationData[0].dateTotal}</div>
                <a
                  href={educationData[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-school-link"
                >
                  {educationData[0].school}
                </a>
                <div className="education-degree">{educationData[0].degree}</div>
                <div className="education-gpa">{educationData[0].gpa}</div>
                <div className="education-location">{educationData[0].location}</div>
              </div>

              <div className="education-section">
                <h4>Concentrations:</h4>
                <div className="education-tags">
                  {educationData[0].concentrations.map((concentration, i) => (
                    <span key={i} className="education-tag concentration-tag">
                      {concentration}
                    </span>
                  ))}
                </div>
              </div>

              <div className="education-section">
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
                <h4>Relevant Courses:</h4>
                <div className="courses-grid">
                  {Object.entries(educationData[0].courses).map(([category, courseList]) => (
                    <div key={category} className="course-category">
                      <h5>{category}:</h5>
                      <div className="course-list">
                        {courseList.map((course, i) => (
                          <div key={i} className="course-item">
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="education-right">
            <div
              key={educationData[1].id}
              className="education-box high-school-box"
              data-aos="fade-up"
            >
              <div className="education-header">
                <div className="education-date">{educationData[1].dateTotal}</div>
                <a
                  href={educationData[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-school-link"
                >
                  {educationData[1].school}
                </a>
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
            </div>

            <div
              key={educationData[2].id}
              className="education-box cmu-box"
              data-aos="fade-up"
            >
              <div className="education-header">
                <div className="education-date">{educationData[2].dateTotal}</div>
                <a
                  href={educationData[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-school-link"
                >
                  {educationData[2].school}
                </a>
                <div className="education-degree">{educationData[2].degree}</div>
                <div className="education-location">{educationData[2].location}</div>
              </div>

              <div className="education-section">
                <h4>Program:</h4>
                {Object.entries(educationData[2].courses).map(([category, courseList]) => (
                  <div key={category} className="course-category">
                    <div className="course-list">
                      {courseList.map((course, i) => (
                        <div key={i} className="course-item">
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;