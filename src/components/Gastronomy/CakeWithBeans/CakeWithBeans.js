import React, { useEffect } from 'react';
import img from '../../../assets/CakeWithBeans.png';
import './CakeWithBeans.css';
import { useLanguage } from '../../language';

const CakeWithBeans = () => {
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
      <p className="cake-text">{translations[language].CakeWithBeans.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Cake With Beans"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='cake-description-rect'>
        <div className='cake-description'>{translations[language].CakeWithBeans.description}</div>
      </div>
      <div className='cake-ingredients-rect'>
        <div className='cake-ingredients-text'>{translations[language].CakeWithBeans.title2}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text2}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text3}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text4}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text5}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text6}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text7}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text8}</div>
        <div className='cake-ingredients'>{translations[language].CakeWithBeans.text9}</div>
      </div>
      <div className='cake-instructions-rect'>
        <div className='cake-instructions-text'>{translations[language].CakeWithBeans.title3}</div>
        <div className='cake-instructions'>{translations[language].CakeWithBeans.text10}</div>
        <div className='cake-instructions'>{translations[language].CakeWithBeans.text11}</div>
        <div className='cake-instructions'>{translations[language].CakeWithBeans.text12}</div>
        
        <div className='cake-tips-text'>{translations[language].CakeWithBeans.title4}</div>
        <div className='cake-tips'>{translations[language].CakeWithBeans.text13}</div>
        <div className='cake-tips'>{translations[language].CakeWithBeans.text14}</div>
        <div className='cake-tips'>{translations[language].CakeWithBeans.text15}</div>
        <div className='cake-tips'>{translations[language].CakeWithBeans.text16}</div>
      </div>
    </>
  );
};

export default CakeWithBeans;