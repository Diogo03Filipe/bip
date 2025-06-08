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
      <p className="pierogi-text">{translations[language].Pierogi.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Pierogi"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='pierogi-description-rect'>
        <div className='pierogi-description'>{translations[language].Pierogi.description}</div>
      </div>
      <div className='pierogi-ingredients-rect'>
        <div className='pierogi-ingredients-text'>{translations[language].Pierogi.title2}</div>
        <div className='pierogi-ingredients'>{translations[language].Pierogi.text}</div>
        <div className='pierogi-ingredients'>{translations[language].Pierogi.text2}</div>
        <div className='pierogi-ingredients'>{translations[language].Pierogi.text3}</div>
        <div className='pierogi-ingredients'>{translations[language].Pierogi.text4}</div>
        <div className='pierogi-ingredients'>{translations[language].Pierogi.text5}</div>
      </div>
      <div className='pierogi-instructions-rect'>
        <div className='pierogi-instructions-text'>{translations[language].Pierogi.title3}</div>
        <div className='pierogi-instructions'>{translations[language].Pierogi.text6}</div>

        <div className='pierogi-tips-text'>{translations[language].Pierogi.title4}</div>
        <div className='pierogi-tips'>{translations[language].Pierogi.text6}</div>
        <div className='pierogi-tips'>{translations[language].Pierogi.text7}</div>
        <div className='pierogi-tips'>{translations[language].Pierogi.text8}</div>
        <div className='pierogi-tips'>{translations[language].Pierogi.text9}</div>
        <div className='pierogi-tips'>{translations[language].Pierogi.text10}</div>
      </div>
    </>
  );
};

export default Pierogi;