import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Postcard from '../assets/images/AboutMePostcard.png';
import Topbar from '../components/Topbar';

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
      <Topbar />
      <section id="about">
        <div className="about-container">
          <img 
            src={Postcard} 
            className="postcard" 
            alt="About Me Postcard"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div 
            className="about-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="about-header">About Me</h2>  
            <p>
              Hi! I’m Anaiysaa Deswal, a sophomore at Purdue University studying Computer Science and passionate about building technology that creates meaningful impact. I am specializing in Artificial Intelligence & Machine Learning, Computational Systems Engineering, and Software Engineering, with a strong interest in projects that bring together data, AI, and complex computing systems to solve real-world challenges. <br></br><br></br>
              Alongside my technical interests, I am pursuing a certificate in Entrepreneurship and Innovation, where I combine creative problem-solving with leadership and business strategy. These experiences have strengthened my ability to guide teams, give back through volunteering  and mentorship, and make a lasting impact beyond the screen. <br></br><br></br>
              Outside of academics, I enjoy playing and listening to music, exploring art and design, and swimming — all of which help me stay inspired, balanced, and refreshed. <br></br><br></br>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;