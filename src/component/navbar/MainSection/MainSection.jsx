import fallbackImage from '../../../assets/359.jpg'; // Path to your fallback image
import React, { useState } from 'react';
import video from '../../../assets/vid.mp4'; // Adjust the path according to your project structure
import './MainSection.css';

const MainSection = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <>
      <div className="container">
        {videoError ? (
          <img src={fallbackImage} alt="Fallback Image" className="video-background" />
        ) : (
          <video
            src={video}
            type="video/mp4"
            autoPlay
            muted
            loop
            className="video-background"
            onError={handleVideoError}
          />
        )}
        <div className="content">
          <h3>A sun rising behind the pyramid</h3>
          <br />
          <p>symbolizing a new adventure. </p>
         
        </div>
      </div>
    </>
  );
};

export default MainSection;
