import React, { useState, useEffect } from 'react';
import '../styles/Topbar.css';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'Education', 'contacts'];

const Topbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { label: 'About Me',   href: '#about',     id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects',   href: '#projects',   id: 'projects' },
    { label: 'Education',  href: '#Education',  id: 'Education' },
    { label: 'Contact',    href: '#contacts',   id: 'contacts' },
  ];

  return (
    <nav className="topbar">
      <ul className="logo">
        <li><a href="#home">Anaiysaa Deswal</a></li>
      </ul>
      <ul className="links">
        {navItems.map(({ label, href, id }) => (
          <li key={id}>
            <a href={href} className={activeSection === id ? 'active' : ''}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Topbar;
