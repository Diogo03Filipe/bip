import React, { useEffect } from 'react';
import img from '../../../assets/Pierogi.png';
import './Pierogi.css';
import { useLanguage } from '../../language';

const Pierogi = () => {
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
      <p className="text">Pierogi</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Pierogi"
            className="full-width-img"
          />
        </div>
        
      </div>
    </>
  );
};

export default Pierogi;