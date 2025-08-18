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
            <h2 className="about-header">365 Party Girl - Charli XCX</h2>  
            <p>
              Bumpin' that, bumpin' that, bumpin' that, bumpin' that Bumpin' that, bumpin' that, bumpin' that, bumpin' that <br></br><br></br>
              Okay, okay Okay, okay, okay Here we go When I'm in the club, yeah, I'm (bumpin' that) When I'm at the house, yeah, I'm (bumpin' that) 365, party girl (bumpin' that) Should we do a little key? Should we have a little line? Wanna go real wild when I'm (bumpin' that) Meet me in the bathroom if you're (bumpin' that) <br></br><br></br>
              365, party girl (bumpin' that) French manicure, wipe away the residue Push my hair back, I look hot when I'm (bumpin' that) No, I really don't stop <br></br><br></br>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;