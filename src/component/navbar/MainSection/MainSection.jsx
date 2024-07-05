import React from 'react';
import video from '../../../assets/vid.mp4'; // Adjust the path according to your project structure
import './MainSection.css';

const MainSection = () => {
  return (
    <>
      <div className="container">
{        <video src={video} type="video/mp4" autoPlay muted loop className="video-background">
        <source  />
          
        </video>}
        <div className="content">
          <h3>A sun rising behind the pyramid</h3>
          <br />
          
          <p>symbolizing a new adventure. </p>
          {/* Additional content can go here */}
        </div>
      </div>
    </>
  );
};

export default MainSection;
