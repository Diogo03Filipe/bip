import React, { useEffect } from 'react';
import img from '../../../assets/BakedBeans.png';
import './BakedBeans.css';
import { useLanguage } from '../../language';

const BakedBeans = () => {
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
      <p className="baked-text">{translations[language].BakedBeans.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Baked Beans"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='baked-description-rect'>
        <div className='baked-description'>{translations[language].BakedBeans.description}</div>
      </div>
      <div className='baked-ingredients-rect'>
        <div className='baked-ingredients-text'>{translations[language].BakedBeans.title2}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text2}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text3}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text4}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text5}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text6}</div>
        <div className='baked-ingredients'>{translations[language].BakedBeans.text7}</div>
      </div>
      <div className='baked-instructions-rect'>
        <div className='baked-instructions-text'>{translations[language].BakedBeans.title3}</div>
        <div className='baked-instructions'>{translations[language].BakedBeans.text8}</div>
        <div className='baked-instructions'>{translations[language].BakedBeans.text9}</div>
        <div className='baked-instructions'>{translations[language].BakedBeans.text10}</div>
        <div className='baked-instructions'>{translations[language].BakedBeans.text11}</div>
        <div className='baked-instructions'>{translations[language].BakedBeans.text12}</div>
        
        <div className='baked-tips-text'>{translations[language].BakedBeans.title4}</div>
        <div className='baked-tips'>{translations[language].BakedBeans.text13}</div>
        <div className='baked-tips'>{translations[language].BakedBeans.text14}</div>
        <div className='baked-tips'>{translations[language].BakedBeans.text15}</div>
      </div>
    </>
  );
};

export default BakedBeans;