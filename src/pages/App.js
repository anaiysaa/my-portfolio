import React, { useEffect } from 'react';
import '../styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Topbar from '../components/Topbar';
import Home from './Home.js';
import About from './About.js';
import Education from './Education.js';
import Projects from './Projects.js';
import Footer from '../components/Footer.js';
import Contacts from './Contacts.js';
import Experience from './Experience.js';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="app-container">
      <Topbar />
      <div className="main-scroll-container">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;