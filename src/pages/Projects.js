import React from 'react';
import '../styles/Projects.css';

import Topbar from '../components/Topbar';
import MagazineProjects from '../components/MagazineProjects';

function Projects() {
  return (
    <div>
        <Topbar />
        <section id="Projects">
            <div className="projects-container">
                <div className="projects-title">
                </div>
                <div className="magazine-wrapper">
                    <MagazineProjects />
                </div>
            </div>
        </section>
    </div>
  );
}

export default Projects;