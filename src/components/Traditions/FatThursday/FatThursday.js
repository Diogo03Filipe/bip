import React, { useEffect } from 'react';
import img from '../../../assets/FatThursday.png';
import './FatThursday.css';
import { useLanguage } from '../../language';

const FatThursday = () => {
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
      <p className="fat-title1">Fat Thursday</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Fat Thursday"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='fat-rect'>
        <div className='fat-title'>Polish Folk Costumes</div>
        <div className='fat-text'>Polish folk costumes are rich and diverse, reflecting the fat of individual regions.
        Here is some general information:</div>
        <div className='fat-title'>Diversity:</div>
        <div className='fat-text'>• Each region of Poland has its own unique costumes, differing in colors, patterns, and elements.</div>
        <div className='fat-text'>• The most well-known include costumes from: Krákow, Łowicz, and the mountains (Góralski)</div>
        <div className='fat-title'>Costume Elements:</div>
        <div className='fat-text'>•<b>Women: </b> skirts, blouses, corsets, shawls, necklaces.</div>
        <div className='fat-text'>•<b>Man: </b> trousers, shirts, vests, belts, hats.</div>
        <div className='fat-title'>Ocasions:</div>
        <div className='fat-text'>• Folk Costumes are worn during holidays, festivals, and regional celebrations.</div>
        <div className='fat-text'>• They are also used by folk groups.</div>
        <div className='fat-title'>Symbolism:</div>
        <div className='fat-text'>• Folk Costumes are an important element of Polish culture and symbolism.</div>
        <div className='fat-text'>• They reflect local history and customs.</div>
      </div>
    </>
  );
};

export default FatThursday;