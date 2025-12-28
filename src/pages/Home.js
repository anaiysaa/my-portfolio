import React from 'react';
import '../styles/Home.css';

import Topbar from '../components/Topbar';
import Video from '../assets/videos/videoBackground.MP4'
import AutoPause from '../components/AutoPause.js';

function Home() {
  return (
      <section id = "home">
        <AutoPause src={Video} className = "videoHome"/>
        <div className="home-content">
          <div className="title">
            Portfolio
          </div>
          <div className = 'name'>
            Anaiysaa Deswal
            <div className='subtitle'>
              Computer Science & Machine Learning Student at Purdue University
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home;