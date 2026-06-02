// Projects.js
import React, { useState, useRef } from 'react';
import '../styles/Projects.css';

import hairIQ from '../assets/project_slides/HairIQ.png';
import hairIQCover from '../assets/project_slides/HairIQ_Cover.jpg';
import datamineCover from '../assets/project_slides/datamineCover.png';
import datamineImage from '../assets/project_slides/J&JPoster.png';
import workwayvesCover from '../assets/project_slides/workwayvesCover.png';
import vipCover from '../assets/project_slides/vipCover.png';
import Vip from '../assets/project_slides/VIP.png';
import workwayvesImage from '../assets/project_slides/workwayves.png';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const projects = [
    { 
      id: 'vip', 
      name: 'VIP', 
      description: 'Vertically Integrated Projects - Description here...',
      details: 'a.',
      image: Vip,
      cover: vipCover,
      links: 'none',
      github: 'none'
    },
    {
      id: 'datamine', 
      name: 'Datamine', 
      description: 'Data mining and analysis project',
      details: 'Currently in development, more information coming soon...',
      image: datamineImage,
      cover: datamineCover,
      links: 'none',
      github: 'none'
    },
    { 
      id: 'workwayves', 
      name: 'workwayves', 
      description: 'Workplace management solution',
      details: 'Full details about project...',
      image: workwayvesImage,
      cover: workwayvesCover,
      links: 'https://gamma.app/docs/WorkWayves-Technical-Documentation-zji79naosb6agsd?mode=doc',
      github: 'none'
    },
    {
      id: 'Hair-IQ',
      name: 'Hair-IQ',
      description: 'pitch competition',
      details: 'Full details about ',
      image: hairIQ,
      cover: hairIQCover,
      links: 'none',
      github: 'none'
    },
    {
      id: 'mia',
      name: 'MIA',
      description: 'TinyML Personal Desk Assistant',
      details: 'Designing and training a binary audio classification CNN from scratch for custom wake word detection. Deploying a quantized TFLite model on embedded ARM hardware (Raspberry Pi) alongside offline speech recognition, intent classification, and live API integrations for calendar and personal notification services.',
      tech: 'Python · PyTorch · TFLite · Raspberry Pi',
      date: 'May 2026 – Present',
      image: 'none',
      cover: 'none',
      links: 'none',
      github: 'none'
    },
    {
      id: 'ootd',
      name: 'OOTD',
      description: 'Virtual Closet App',
      details: 'Building a full-stack wardrobe management app enabling users to catalog clothing, build outfits, and organize mood boards with cloud storage. Integrating AI-powered image analysis and web scraping for automated personalized clothing recommendations and best-price search across retailers and resellers.',
      tech: 'Python · React · FastAPI · Supabase',
      date: 'April 2026 – Present',
      image: 'none',
      cover: 'none',
      links: 'none',
      github: 'none'
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const next = currentSlide < projects.length ? currentSlide + 1 : 0;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide > 0 ? currentSlide - 1 : projects.length;
    goToSlide(prev);
  };

  return (
    <section id="projects">
      <div className="projects-title">Projects</div>
      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="projects-container"
        onScroll={(e) => {
          const scrollLeft = e.target.scrollLeft;
          const slideWidth = e.target.clientWidth;
          const newSlide = Math.round(scrollLeft / slideWidth);
          setCurrentSlide(newSlide);
        }}
      >
        {/* Slide 0: Grid of all projects */}
        <div className="project-slide grid-slide">
          <div className="projects-grid">
            {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-card ${project.cover !== "none" ? "has-cover" : ""}`}
                  onClick={() => goToSlide(index + 1)}
                >
                  {project.cover !== "none" ? (
                    <img src={project.cover} alt={`${project.name} cover`}
                      className="project-cover-image" />
                  ) : (
                    <>
                      <h3 className="project-card-title">{project.name}</h3>
                      <p className="project-card-description">{project.description}</p>
                    </>
                  )}
                </div>
                
            ))}
          </div>
        </div>

        {/* Individual project slides */}
        {projects.map((project) => (
        <div key={`slide-${project.id}`} className="project-slide detail-slide">
          {project.image && project.image !== "none" ? (
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.name} className="project-full-image" />
            </div>
          ) : (
            <div className="project-detail-content">
              <h2 className="project-detail-title">{project.name}</h2>
              <p className="project-detail-description" style={{ fontStyle: 'italic', fontSize: '18px', marginBottom: '6px' }}>{project.description}</p>
              {project.date && <p style={{ fontFamily: 'Cutive Mono', fontSize: '13px', marginBottom: '14px', color: '#555' }}>{project.date}</p>}
              <p className="project-detail-description">{project.details}</p>
              {project.tech && <p style={{ fontFamily: 'Cutive Mono', fontSize: '13px', marginTop: '16px', color: '#333' }}>{project.tech}</p>}
              <button className="back-button" onClick={() => goToSlide(0)}>
                ← Back to All Projects
              </button>
            </div>
          )}
        </div>
      ))}

      </div>

      {/* Navigation */}
      <div className="slide-navigation">
        <button className="nav-arrow" onClick={prevSlide}>‹</button>
        <div className="slide-indicators">
          {[...Array(projects.length + 1)].map((_, index) => (
            <button
              key={index}
              className={`slide-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="nav-arrow" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
}

export default Projects;