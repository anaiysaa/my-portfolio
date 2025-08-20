import React from 'react';
import '../styles/Projects.css';

import Topbar from '../components/Topbar';
import MagazineProjects from '../components/MagazineProjects';
import CoverPng from '../assets/images/cover.png';

function Projects() {
  const pages = [
  {
    id: 1,
    category: 'Web',
    title: 'Personal Portfolio Website',
    subtitle: 'React • Tailwind CSS • JavaScript • HTML/CSS',
    image: '', // optional: add a cover image URL
    description:
      'Designed and developed a personal portfolio website to showcase projects, interests, experience, and technical skills in a responsive, creative interface. Implemented interactive UI elements and a simple contact request system.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    date: '2025',
    github: '#', // replace with your repo URL
    demo: '#',   // replace with your live site URL
  },
  {
    id: 2,
    category: 'Software',
    title: 'BoilerChat',
    subtitle: 'Java • CS 180 Final Project',
    image: '', // optional: add a cover image URL
    description:
      'Social media messaging platform with a thread-based server and database system. Supports real-time messaging, friend/block/search features, and customizable personal profiles.',
    tech: ['Java'],
    date: '2024',
    github: '#', // replace with repo URL
    demo: '#',   // optional demo link
  },
  ];
  
  return (
    <div>
        <Topbar />
        <section id="Projects">
            <div className="projects-container">
                <div className="projects-title">
                </div>
                <div className="magazine-wrapper">
                    <MagazineProjects
                      pages={pages}
                      coverTitle="Projects"
                      coverSubtitle="Selected Work"
                      coverIssue=""
                      coverImage={CoverPng}
                    />
                </div>
            </div>
        </section>
    </div>
  );
}

export default Projects;