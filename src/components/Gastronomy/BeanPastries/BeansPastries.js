import React, { useEffect } from 'react';
import img from '../../../assets/BeanPastries.png';
import './BeanPastries.css';
import { useLanguage } from '../../language';

const BeanPastries = () => {
  const { language, translations } = useLanguage();
  

  useEffect(() => {
    // Set background color for THIS PAGE
    document.body.style.backgroundColor = '#f7ddd0'; // Replace with your desired color

    // Cleanup: Reset background when leaving the page
    return () => {
      document.body.style.backgroundColor = ''; // Revert to default
    };
  }, []);

  return (
    <>
      <p className="text">Bean Pastries</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Bean Pastries"
            className="full-width-img"
          />
        </div>
        
      </div>
    </>
  );
};

export default BeanPastries;