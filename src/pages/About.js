import React from 'react';
import '../styles/About.css';
import { Github, Linkedin, Mail, FileMinus } from 'lucide-react';

import resume from '../assets/AnaiysaaResume2026.pdf';
import headshot from '../assets/images/headshot.webp';

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/anaiysaa', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anaiysaadeswal/', icon: Linkedin },
    { name: 'Email', url: 'mailto:adeswal@purdue.edu', icon: Mail },
    { name: 'Resume', url: resume, icon: FileMinus}
  ];

function About() {
  return (
    <div>
      <section id="about">
        <div className="about-container">

          {/* Circular headshot — left side */}
          <div
            className="about-photo-wrap"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-offset="60"
            data-aos-once="false"
          >
            <img src={headshot} className="about-headshot" alt="Anaiysaa Deswal" loading="lazy" />
          </div>

          {/* Text — right side */}
          <div
            className="about-text"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-offset="60"
            data-aos-once="false"
          >
            <div className="about-header">Hi, I'm Anaiysaa!</div>
            <p>
              I'm a sophomore at Purdue University studying Computer Science and passionate about building technology that creates meaningful impact. I am specializing in Artificial Intelligence & Machine Learning, Computational Systems Engineering, and Software Engineering, with a strong interest in projects that bring together data, AI, and complex computing systems to solve real-world challenges.
            </p>
            <br />
            <p>
              Alongside my technical interests, I am pursuing a certificate in Entrepreneurship and Innovation, where I combine creative problem-solving with leadership and business strategy. These experiences have strengthened my ability to guide teams, give back through volunteering and mentorship, and make a lasting impact beyond the screen.
            </p>
            <br />
            <p>
              Outside of academics, I enjoy playing and listening to music, exploring art and design, and swimming — all of which help me stay inspired, balanced, and refreshed. Here's a look into my journey so far...
            </p>

            <div className="about-ender">Enjoy</div>

            <div className="about-social-links">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-social-icon"
                    title={social.name}
                  >
                    <IconComponent size={22} />
                  </a>
                );
              })}
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}

export default About;
