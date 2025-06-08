import React, { useEffect } from 'react';
import img from '../../../assets/FatThursday.png';
import './FatThursday.css';
import { useLanguage } from '../../language';

const FatThursday = () => {
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
      <p className="fat-title1">{translations[language].FatThursday.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Fat Thursday"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='fat-rect'>
        <div className='fat-title'>{translations[language].FatThursday.title}</div>
        <div className='fat-text'>{translations[language].FatThursday.text}</div>
        <div className='fat-title'>{translations[language].FatThursday.title2}</div>
        <div className='fat-text'>{translations[language].FatThursday.text2}</div>
        <div className='fat-title'>{translations[language].FatThursday.title3}</div>
        <div className='fat-text'>{translations[language].FatThursday.text3}</div>
      </div>
    </>
  );
};

export default FatThursday;