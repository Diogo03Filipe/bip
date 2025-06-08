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
      <p className="bean-text">{translations[language].BeanPastries.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Bean Pastries"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='description-rect'>
        <div className='bean-description'>{translations[language].BeanPastries.description}</div>
      </div>
      <div className='ingredients-rect'>
        <div className='ingredients-text'>{translations[language].BeanPastries.title2}</div>
        <div className='ingredients'>{translations[language].BeanPastries.text}</div>
        <div className='ingredients'>{translations[language].BeanPastries.text2}</div>
        <div className='ingredients'>{translations[language].BeanPastries.text3}</div>
      </div>
      <div className='instructions-rect'>
        <div className='instructions-text'>{translations[language].BeanPastries.title3}</div>
        <div className='instructions'>{translations[language].BeanPastries.text4}</div>
        <div className='instructions'>{translations[language].BeanPastries.text5}</div>
        <div className='instructions'>{translations[language].BeanPastries.text6}</div>
        <div className='tips-text'>{translations[language].BeanPastries.title4}</div>
        <div className='tips'>{translations[language].BeanPastries.text7}</div>
        <div className='tips'>{translations[language].BeanPastries.text8}</div>
        <div className='tips'>{translations[language].BeanPastries.text9}</div>
      </div>
    </>
  );
};

export default BeanPastries;