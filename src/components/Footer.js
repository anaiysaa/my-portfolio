import React from 'react';
import { Github, Linkedin, Mail, FileMinus, Heart } from 'lucide-react';
import '../styles/Footer.css';

import resume from '../assets/AnaiysaaResume2026.pdf';

const Footer = () => {
   const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/anaiysaa', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anaiysaadeswal/', icon: Linkedin },
    { name: 'Email', url: 'mailto:adeswal@purdue.edu', icon: Mail },
    { name: 'Resume', url: resume, icon: FileMinus}
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon" title={social.name}>
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {currentYear}  - Made with</span>
            <Heart size={16} className="footer-heart" />
            <span> and a lot of vanilla chai from Vienna</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
