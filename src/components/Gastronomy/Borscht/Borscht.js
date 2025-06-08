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
        <div className='borscht-ingredients-text'>{translations[language].BeanPastries.title2}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text2}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text3}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text4}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text5}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text6}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text7}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text8}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text9}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text10}</div>
        <div className='borscht-ingredients'>{translations[language].BeanPastries.text11}</div>
      </div>
      <div className='borscht-instructions-rect'>
        <div className='borscht-instructions-text'>{translations[language].BeanPastries.title3}</div>
        <div className='borscht-instructions'>{translations[language].BeanPastries.text12}</div>
        <div className='borscht-instructions'>{translations[language].BeanPastries.text13}</div>
        <div className='borscht-instructions'>{translations[language].BeanPastries.text14}</div>
        <div className='borscht-instructions'>{translations[language].BeanPastries.text15}</div>
        <div className='borscht-instructions'>{translations[language].BeanPastries.text16}</div>
        <div className='borscht-instructions'>{translations[language].BeanPastries.text17}</div>
        
        <div className='borscht-tips-text'>{translations[language].BeanPastries.title4}</div>
        <div className='borscht-tips'>{translations[language].BeanPastries.text18}</div>
        <div className='borscht-tips'>{translations[language].BeanPastries.text19}</div>
        <div className='borscht-tips'>{translations[language].BeanPastries.text20}</div>
        <div className='borscht-tips'>{translations[language].BeanPastries.text21}</div>
      </div>
    </>
  );
};

export default Borscht;