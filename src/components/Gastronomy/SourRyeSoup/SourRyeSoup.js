import React, { useEffect } from 'react';
import img from '../../../assets/SourRyeSoup.png';
import './SourRyeSoup.css';
import { useLanguage } from '../../language';

const SourRyeSoup = () => {
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
      <p className="sour-text">{translations[language].SourRyeSoup.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Sour Rye Soup"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='sour-description-rect'>
        <div className='sour-description'>{translations[language].SourRyeSoup.description}</div>
      </div>
      <div className='sour-ingredients-rect'>
        <div className='sour-ingredients-text'>{translations[language].SourRyeSoup.title2}</div>
        <div className='sour-ingredients'>{translations[language].SourRyeSoup.text}</div>
        <div className='sour-ingredients'>{translations[language].SourRyeSoup.text2}</div>
        <div className='sour-ingredients'>{translations[language].SourRyeSoup.text3}</div>
        <div className='sour-ingredients'>{translations[language].SourRyeSoup.text4}</div>
        <div className='sour-ingredients'>{translations[language].SourRyeSoup.text5}</div>
        <div className='sour-ingredients'>{translations[language].SourRyeSoup.text6}</div>
      </div>
      <div className='sour-instructions-rect'>
        <div className='sour-instructions-text'>{translations[language].SourRyeSoup.title3}</div>
        <div className='sour-instructions'>{translations[language].SourRyeSoup.text7}</div>
        <div className='sour-instructions'>{translations[language].SourRyeSoup.text8}</div>
        <div className='sour-instructions'>{translations[language].SourRyeSoup.text9}</div>
        
        <div className='sour-tips-text'>{translations[language].SourRyeSoup.title4}</div>
        <div className='sour-tips'>{translations[language].SourRyeSoup.text10}</div>
        <div className='sour-tips'>{translations[language].SourRyeSoup.text11}</div>
      </div>
    </>
  );
};

export default SourRyeSoup;