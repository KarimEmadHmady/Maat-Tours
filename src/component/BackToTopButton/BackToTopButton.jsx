// BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';
import { FaArrowUp } from 'react-icons/fa'; // Correct import

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          <FaArrowUp /> {/* Use FaArrowUp icon */}
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
