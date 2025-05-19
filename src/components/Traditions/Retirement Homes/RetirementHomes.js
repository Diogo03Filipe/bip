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
      <p className="text">Retirement Homes</p>
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
        <div className='homes-title'>Retirement Homes in Poland</div>
        <div className='homes-text'>In Poland, retirement homes, also known as care homes or senior homes, play a crucial role in caring for the elderly.
          Here are some key aspects regarding these facilities:</div>
        <div className='homes-title'>Plubic Care Homes:</div>
        <div className='homes-text'>• Run by local governments.</div>
        <div className='homes-text'>• The costs of stay are partially funded by the state.</div>
        <div className='homes-text'>• Often have long wait lists.</div>
        <div className='homes-title'>Services Offered:</div>
        <div className='homes-text'>• <b>24-Hour Care: </b> Assistance with daily activities, such as eating, dressing, and personal hygiene.</div>
        <div className='homes-text'>• <b>Medical Care: </b> Monitoring health conditions, administering medications, and rehabilitation.</div>
        <div className='homes-text'>• <b>Nutrion: </b> Balanced meals tailored to the needs of seniors.</div>
        <div className='homes-text'>• <b>Recreation and Therapeutic Activities: </b> Organized to activate seniors and improve their well-being.</div>
        <div className='homes-text'>• <b>Psychological Care: </b> Emotional support for residents.</div>
      </div>
    </>
  );
};

export default RetirementHomes;