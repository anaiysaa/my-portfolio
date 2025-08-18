import React from 'react';
import '../styles/Home.css';

import Topbar from '../components/Topbar';
import HomePic from '../assets/images/HomePic.JPEG';
import Title from '../assets/images/HomeTitle.png';
import Video from '../assets/videos/videoBackground.MP4'
import AutoPause from '../components/AutoPause.js';

function Home() {
  return (
    <div>
      <Topbar /> 
      <section id = "home">
        {/*<img src={HomePic}/>*/}
        <img src={Title} className="title"/>
      <AutoPause src={Video} className = "videoHome"/>
      </section>
    </div>
    );
}

export default Home;