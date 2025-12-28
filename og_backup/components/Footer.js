import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, FileMinus, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
   const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/anaiysaa', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anaiysaadeswal/', icon: Linkedin },
    /*{ name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
    { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: Instagram }*/
    { name: 'Email', url: 'mailto:adeswal@purdue.edu', icon: Mail },
    { name: 'Resume', url: '', icon: FileMinus}
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/*}
        <h2 className="footer-title">Anaiysaa Deswal</h2>
        <p className="footer-tagline">
            Anaiysaa note* make a tagline here!
        </p>

         */}
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

        <p className="footer-message">"Whenever someone creates something with all of their heart, then that creation is given a soul"</p>
      
      
        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {currentYear}  - Made with</span>
            <Heart size={16} className="footer-heart" />
            <span> and lots of coffee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
