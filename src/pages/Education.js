import React from 'react';
import '../styles/Education.css';

import Topbar from '../components/Topbar';
import PurdueIcon from '../assets/videos/PurdueDiskPlain2.mp4';
import HNAIcon from '../assets/videos/HNADiskPlain.mp4';
import AutoPause from '../components/AutoPause.js';


function Education() {
  return (
    <div>
        <Topbar />
        <section id = "Education">
            <div className = "education-container">
                <div className = "education-title">
                    Education
                </div>
                <div className = "dates">
                    <p>2020–2024</p>
                    <p>2024–2028</p>
                </div>
                <div className = "video-icons">
      <AutoPause src={HNAIcon} className = "hna-disk"/>
      <AutoPause src={PurdueIcon} className = "purdue-disk"/>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Education;