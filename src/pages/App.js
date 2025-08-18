import React from 'react';
import '../styles/Home.css';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Education from '../pages/Education.js';
import Contacts from '../pages/Contacts.js';
import Experience from '../pages/Experience.js';
import Projects from '../pages/Projects.js';

function App() {
  return (
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
      {/*<section id="education">
        <Education />
      </section>*/}
      <section id="Projects">
        <Projects/>
      </section>
      <section id="contacts">
        <Contacts/>
      </section>      
    </div>
  );
}

export default App;