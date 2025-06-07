import React, { useEffect } from 'react';
import img from '../../../assets/RetirementHomes.png';
import './RetirementHomes.css';
import { useLanguage } from '../../language';

const RetirementHomes = () => {

  const { language, translations } = useLanguage();

  useEffect(() => {
    // Set background color for THIS PAGE
    document.body.style.backgroundColor = '#e7fcb8'; // Replace with your desired color

    // Cleanup: Reset background when leaving the page
    return () => {
      document.body.style.backgroundColor = ''; // Revert to default
    };
  }, []);

  return (
    <>
      <p className="homes-title1">{translations[language].RetirementHomes.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Retirement Homes"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='homes-rect'>
        <div className='homes-title'>{translations[language].RetirementHomes.title}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text1}</div>
        <div className='homes-title'>{translations[language].RetirementHomes.title2}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text3}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text4}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text5}</div>
        <div className='homes-title'>{translations[language].RetirementHomes.title3}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text7}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text8}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text9}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text10}</div>
        <div className='homes-text'>{translations[language].RetirementHomes.text11}</div>
      </div>
    </>
  );
};

export default RetirementHomes;