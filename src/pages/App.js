import React from 'react';
import '../styles/App.css';

import Topbar from '../components/Topbar';
import Home from './Home.js';
import About from './About.js';
import Education from './Education.js';
import Projects from './Projects.js';
import Footer from '../components/Footer.js';
import Contacts from './Contacts.js';
import Experience from './Experience.js';

function App() {
  return (
    <div className="app-container">
      <Topbar />
      <div className="main-scroll-container">
        <section id="home">
          <Home />
        </section>
        <section id="about">``
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