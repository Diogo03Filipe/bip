import React, { useEffect } from 'react';
import img from '../../../assets/FolkCostumes.png';
import './FolkCostumes.css';
import { useLanguage } from '../../language';

const FolkCostumes = () => {
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
      <p className="folk-title1">{translations[language].FolkCostumes.title}</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Folk Costumes"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='folk-rect'>
        <div className='folk-title'>{translations[language].FolkCostumes.title2}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text}</div>
        <div className='folk-title'>{translations[language].FolkCostumes.title3}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text2}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text3}</div>
        <div className='folk-title'>{translations[language].FolkCostumes.title4}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text4}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text5}</div>
        <div className='folk-title'>{translations[language].FolkCostumes.title5}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text6}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text7}</div>
        <div className='folk-title'>{translations[language].FolkCostumes.title6}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text8}</div>
        <div className='folk-text'>{translations[language].FolkCostumes.text9}</div>
      </div>
    </>
  );
};

export default FolkCostumes;