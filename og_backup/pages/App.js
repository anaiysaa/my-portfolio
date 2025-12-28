import React from 'react';
import '../styles/Home.css';
import { useState } from 'react';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Education from '../pages/Education.js';
import Contacts from '../pages/Contacts.js';
import Experience from '../pages/Experience.js';
import Projects from '../pages/Projects.js';
import Footer from '../components/Footer.js';
import Loading from '../pages/Loading.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <Loading onComplete={handleLoadingComplete} duration={4000} />
      )}
      
      {!isLoading && (
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
      <section id="Projects">
        <Projects />
      </section>
      <section id="Education">
        <Education/>
      </section>
      <section id="contacts">
        <Contacts/>
      </section>      
      <section id="footer">
        <Footer/>
      </section>    
    </div>
      )}
    </div>
  );
}

export default App;