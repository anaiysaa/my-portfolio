import React, { useState } from 'react';
import '../styles/Spotify.css'; 

import Top from '../assets/images/spotifyTop.png';
import Bottom from '../assets/images/spotifyBottom.png';
import listPic1 from '../assets/images/list1.png';
import listPic2 from '../assets/images/list2.png';
import listPic3 from '../assets/images/list3.png';
import listPic4 from '../assets/images/list4.png';

const skillAlbums = [
  { index: '1',
    title: 'Front-End',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    skillsImages: [''],
    pic: listPic1,
    desc:'',
    time:''
  },
    { index: '2',
      title: 'Back-End',
    skills: ['Java', 'C', 'API Programming', 'Node.js'],
    skillsImages: [''],
    pic: listPic2,
    desc:'',
    time:''
  },
    { index: '3',
      title: 'Cloud & DevOps',
    skills: ['Azure', 'Git', 'Docker', 'CI/CD'],
    skillsImages: [''],
    pic: listPic3,
    desc:'',
    time:''
  },
      { index: '4',
      title: 'Databases & More',
    skills: ['SQL', 'Azure Data Studio', 'Power BI', 'MongoDB'],
    skillsImages: [''],
    pic: listPic4,
    desc:'',
    time:''
  }
]

const Skills = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
    setActivePopup(null);
    setIsClosing(false);
    }, 500);
  };

  

  const toggleAlbum = (title) => {
    setActivePopup(activePopup === title ? null : title);
  };

  return (
    <div className="skills-wrapper">
      <img src = {Top} className = "spotify-top"/>
      <div className = 'album-wrapper'>
        {skillAlbums.map((album, i) => (
          <div className = 'album-card' onClick={() => setActivePopup(album)}>
            <img src = {album.pic} className = 'album-image'/>
            <div className = 'album-title'> 
              {album.title}
            </div>
          </div>
        ))}
      </div>
      <img src = {Bottom} className = "spotify-bottom"/>

      {/* Album Popup */}
      {activePopup && (
          <div
    className={`skills-popup-overlay ${isClosing ? 'closing' : ''}`}
    onClick={handleClose}
  >
        <div className="skills-popup-overlay" onClick={() => setActivePopup(null)}>
          <div className="skills-popup-content" onClick={(e) => e.stopPropagation()}>
         <button className="back-button" onClick={handleClose}>
         ←
        </button>
        <img src = {activePopup.pic} className = 'album-cover'/>
        {activePopup.title}
        {activePopup.description}
        {activePopup.time}
        <div className="skills-list">
        {activePopup.skills?.map((skill, i) => (
          <div className="skill-item" key={i}>
            {activePopup.skillsImages?.[i] && (
              <img
                src={activePopup.skillsImages[i]}
                className="skill-image"
              />
            )}
            {skill}
          </div>
        ))}
      </div>
        </div>
        </div>
</div>
      )}
    </div>

  );
};

export default Skills;