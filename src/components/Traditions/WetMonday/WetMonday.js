import React, { useEffect } from 'react';
import img from '../../../assets/WetMonday.png';
import './WetMonday.css';
import { useLanguage } from '../../language';

const WetMonday = () => {
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
      <p className="wet-title1">{translations[language].WetMonday.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Wet Monday"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='wet-rect'>
        <div className='wet-title'>{translations[language].WetMonday.title}</div>
        <div className='wet-text'>{translations[language].WetMonday.text}</div>
        <div className='wet-text'>{translations[language].WetMonday.text2}</div>
      </div>
    </>
  );
};

export default WetMonday;