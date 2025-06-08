import React, { useEffect } from 'react';
import img from '../../../assets/Borscht.png';
import './Borscht.css';
import { useLanguage } from '../../language';

const Borscht = () => {
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
      <p className="borscht-text">{translations[language].Borscht.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Borscht"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='borscht-description-rect'>
        <div className='borscht-description'>{translations[language].Borscht.description}</div>
      </div>
      <div className='borscht-ingredients-rect'>
        <div className='borscht-ingredients-text'>{translations[language].Borscht.title2}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text2}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text3}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text4}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text5}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text6}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text7}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text8}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text9}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text10}</div>
        <div className='borscht-ingredients'>{translations[language].Borscht.text11}</div>
      </div>
      <div className='borscht-instructions-rect'>
        <div className='borscht-instructions-text'>{translations[language].Borscht.title3}</div>
        <div className='borscht-instructions'>{translations[language].Borscht.text12}</div>
        <div className='borscht-instructions'>{translations[language].Borscht.text13}</div>
        <div className='borscht-instructions'>{translations[language].Borscht.text14}</div>
        <div className='borscht-instructions'>{translations[language].Borscht.text15}</div>
        <div className='borscht-instructions'>{translations[language].Borscht.text16}</div>
        <div className='borscht-instructions'>{translations[language].Borscht.text17}</div>
        
        <div className='borscht-tips-text'>{translations[language].Borscht.title4}</div>
        <div className='borscht-tips'>{translations[language].Borscht.text18}</div>
        <div className='borscht-tips'>{translations[language].Borscht.text19}</div>
        <div className='borscht-tips'>{translations[language].Borscht.text20}</div>
        <div className='borscht-tips'>{translations[language].Borscht.text21}</div>
      </div>
    </>
  );
};

export default Borscht;