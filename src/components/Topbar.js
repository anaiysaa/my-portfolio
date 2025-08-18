import React from 'react';
import '../styles/Topbar.css'; 

const Topbar = () => {
  return (
    <nav className="topbar">
      <ul className="logo">
        <li><a href="#home">Anaiysaa Deswal</a></li>
      </ul>
      <ul className="links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
        <li><a href="#">BTS+</a></li>
      </ul>
    </nav>
  );
};


export default Topbar;