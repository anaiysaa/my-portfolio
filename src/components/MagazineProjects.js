import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Calendar, Tag, Wrench } from 'lucide-react';
import '../styles/MagazineProjects.css';

const projects = [
  {
    id: 1,
    category: "Web Development",
    title: "Portfolio Website",
    subtitle: "React & CSS",
    image: "portfolio.png",
    description: "A personal portfolio website with interactive animations.",
    tech: ["React", "CSS", "JavaScript"],
    date: "Aug 2025",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    category: "Web Development",
    title: "Another Project",
    subtitle: "React & CSS",
    image: "portfolio.png",
    description: "Another project description.",
    tech: ["React", "CSS", "JavaScript"],
    date: "Aug 2025",
    github: "#",
    demo: "#"
  }
];

const DevelopmentInProgressPage = ({ pageNumber }) => (
  <div className="project-page">
    <div className="empty-state">
      <Wrench size={64} color="#54828f" />
      <h2>Development Still in Progress</h2>
      <p>This portfolio is currently being built. Check back soon for exciting projects!</p>
      <div className="page-number">{pageNumber}</div>
    </div>
  </div>
);

const ProjectContent = ({ project, pageNumber }) => (
  <div className="project-page">
    <div className="project-header">
      <div className="project-category">
        <Tag size={16} />
        <span className="category-tag">{project.category}</span>
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-subtitle">{project.subtitle}</p>
    </div>

    <div className="project-image-container">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="image-overlay" />
    </div>

    <p className="project-description">{project.description}</p>

    <div className="tech-stack">
      <div className="tech-label">Technologies Used</div>
      <div className="tech-tags">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>

    <div className="project-footer">
      <div className="project-date">
        <Calendar size={16} />
        <span>{project.date}</span>
      </div>
      <div className="project-links">
        <a href={project.github} className="project-link" title="View on GitHub">
          <Github size={18} />
        </a>
        <a href={project.demo} className="project-link" title="View Demo">
          <ExternalLink size={18} />
        </a>
      </div>
    </div>

    <div className="page-number">{pageNumber}</div>
  </div>
);

const MagazineProjects = ({ coverImage }) => {
  const [currentPage, setCurrentPage] = useState(-1);
  const [isFlipping, setIsFlipping] = useState(false);

  // Create pages with development in progress message
  const developmentPages = [
    { id: 'dev1', development: true },
    { id: 'dev2', development: true },
    { id: 'dev3', development: true }
  ];
  
  const totalPages = developmentPages.length;

  const flipToPage = (page) => {
    if (!isFlipping && page >= -1 && page <= totalPages - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsFlipping(false);
      }, 800);
    }
  };

  const nextPage = () => flipToPage(currentPage + 1);
  const prevPage = () => flipToPage(currentPage - 1);
  const handlePageClick = (side) => (side === 'right' ? nextPage() : prevPage());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="magazine-projects-wrapper">
        <div className={`book-container ${currentPage === -1 ? 'closed' : 'open'}`}>
          <div className="book-spine"></div>

          <div className="pages-stack">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="page-layer"
                style={{
                  zIndex: 1,
                  transform: `translateZ(${-2 - i}px) translateX(${i * 0.5}px)`,
                  opacity: 0.7 - i * 0.1
                }}
              ></div>
            ))}

            {/* Cover Page */}
            <div
              className={`magazine-page cover-page ${currentPage === -1 ? 'active' : 'flipped'}`}
              style={{ zIndex: currentPage === -1 ? totalPages + 20 : 0 }}
            >
              <div className="page-front">
                <div
                  className={`page-content cover-content ${coverImage ? 'has-image' : ''}`}
                  onClick={nextPage}
                >
                  {coverImage ? (
                    <img src={coverImage} alt="Cover" />
                  ) : (
                    <div className="cover-design">
                      <div className="cover-header">
                        <h1 className="cover-title">YOUR PORTFOLIO</h1>
                        <div className="cover-subtitle">READY TO CUSTOMIZE</div>
                        <div className="cover-issue">Template Ready</div>
                      </div>
                      <div className="click-hint">Click to open →</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Development Pages */}
            {developmentPages.map((page, index) => (
              <div
                key={page.id}
                className={`magazine-page ${
                  index === currentPage ? 'active' : index < currentPage ? 'flipped' : 'unflipped'
                } ${isFlipping ? 'flipping' : ''}`}
                style={{
                  zIndex: index <= currentPage ? totalPages - index + 10 : totalPages - index,
                  transform: index < currentPage ? 'rotateY(-180deg)' : 'rotateY(0deg)'
                }}
              >
                <div className="page-front">
                  <div
                    className="page-content right-page"
                    onClick={() => handlePageClick('right')}
                  >
                    <DevelopmentInProgressPage pageNumber={index + 1} />
                  </div>
                </div>

                <div className="page-back">
                  <div
                    className="page-content left-page"
                    onClick={() => handlePageClick('left')}
                  >
                    {index > 0 && (
                      <DevelopmentInProgressPage pageNumber={index} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="book-controls">
          <button
            onClick={prevPage}
            disabled={currentPage === -1 || isFlipping}
            className="nav-button prev-button"
            title="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="page-counter">
            {currentPage === -1
              ? 'Cover'
              : `Page ${currentPage + 1} of ${totalPages}`}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className="nav-button next-button"
            title="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagazineProjects;