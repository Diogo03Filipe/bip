import React, { useEffect } from 'react';
import img from '../../../assets/RetirementHomes.png';
import './RetirementHomes.css';
import { useLanguage } from '../../language';

const RetirementHomes = () => {
  const { language, translations } = useLanguage();
  

  useEffect(() => {
    // Set background color for THIS PAGE
    document.body.style.backgroundColor = '#e7fcb8'; // Replace with your desired color

    // Cleanup: Reset background when leaving the page
    return () => {
      document.body.style.backgroundColor = ''; // Revert to default
    };
  }, []);

  return (
    <>
      <p className="text">Retirement Homes</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Retirement Homes"
            className="full-width-img"
          />
        </div>
        
      </div>
    </>
  );
};

export default RetirementHomes;