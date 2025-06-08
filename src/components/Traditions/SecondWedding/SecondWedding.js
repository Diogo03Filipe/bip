import React, { useEffect } from 'react';
import img from '../../../assets/SecondWedding.png';
import './SecondWedding.css';
import { useLanguage } from '../../language';

const SecondWedding = () => {
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
      <p className="wedding-title1">{translations[language].SecondWedding.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Second Wedding"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='wedding-rect'>
        <div className='wedding-title'>{translations[language].SecondWedding.title}</div>
        <div className='wedding-text'>{translations[language].SecondWedding.text}</div>
        <div className='wedding-text'>{translations[language].SecondWedding.text2}</div>
      </div>
    </>
  );
};

export default SecondWedding;