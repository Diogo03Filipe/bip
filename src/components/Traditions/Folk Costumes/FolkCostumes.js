import React, { useEffect } from 'react';
import img from '../../../assets/FolkCostumes.png';
import './FolkCostumes.css';
import { useLanguage } from '../../language';

const FolkCostumes = () => {
  const { language, translations } = useLanguage();
  

  useEffect(() => {
    // Set background color for THIS PAGE
    document.body.style.backgroundColor = '#ffe8ff'; // Replace with your desired color

    // Cleanup: Reset background when leaving the page
    return () => {
      document.body.style.backgroundColor = ''; // Revert to default
    };
  }, []);

  return (
    <>
      <p className="text">Folk Costumes</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Folk Costumes"
            className="full-width-img"
          />
        </div>
        
      </div>
    </>
  );
};

export default FolkCostumes;