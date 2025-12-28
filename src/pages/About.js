import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Linkedin, Mail, FileMinus } from 'lucide-react';

import pic1 from '../assets/images/aboutme.png';
import strip from '../assets/images/aboutmestrip.png';

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/anaiysaa', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anaiysaadeswal/', icon: Linkedin },
    { name: 'Email', url: 'mailto:adeswal@purdue.edu', icon: Mail },
    { name: 'Resume', url: '', icon: FileMinus}
  ];

function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 3500, 
      offset: 20,
      once: false
    });
  }, []);

  return (
    <div>
      <section id="about">
        <div className="about-container">
          <img src={strip} 
            className="about-strip"
            data-aos="fade-up"
            data-aos-delay="200" />
          <img 
            src={pic1} 
            className="postcard" 
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div 
            className="about-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="about-header">Dearest Reader,</div>  
            <p>
              Hi! I’m Anaiysaa Deswal, a sophomore at Purdue University studying Computer Science and passionate about building technology that creates meaningful impact. I am specializing in Artificial Intelligence & Machine Learning, Computational Systems Engineering, and Software Engineering, with a strong interest in projects that bring together data, AI, and complex computing systems to solve real-world challenges. <br></br><br></br>
              Alongside my technical interests, I am pursuing a certificate in Entrepreneurship and Innovation, where I combine creative problem-solving with leadership and business strategy. These experiences have strengthened my ability to guide teams, give back through volunteering  and mentorship, and make a lasting impact beyond the screen. <br></br><br></br>
              Outside of academics, I enjoy playing and listening to music, exploring art and design, and swimming — all of which help me stay inspired, balanced, and refreshed. Here’s a look into my journey so far...<br></br><br></br>
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
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="sidepics">
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;