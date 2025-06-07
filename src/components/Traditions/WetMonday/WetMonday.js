import React, { useEffect } from 'react';
import img from '../../../assets/WetMonday.png';
import './WetMonday.css';
import { useLanguage } from '../../language';

const WetMonday = () => {
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
      <p className="wet-title1">Wet Monday</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Wet Monday"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='wet-rect'>
        <div className='wet-title'>Polish Folk Costumes</div>
        <div className='wet-text'>Polish folk costumes are rich and diverse, reflecting the wet of individual regions.
        Here is some general information:</div>
        <div className='wet-title'>Diversity:</div>
        <div className='wet-text'>• Each region of Poland has its own unique costumes, differing in colors, patterns, and elements.</div>
        <div className='wet-text'>• The most well-known include costumes from: Krákow, Łowicz, and the mountains (Góralski)</div>
        <div className='wet-title'>Costume Elements:</div>
        <div className='wet-text'>•<b>Women: </b> skirts, blouses, corsets, shawls, necklaces.</div>
        <div className='wet-text'>•<b>Man: </b> trousers, shirts, vests, belts, hats.</div>
        <div className='wet-title'>Ocasions:</div>
        <div className='wet-text'>• Folk Costumes are worn during holidays, festivals, and regional celebrations.</div>
        <div className='wet-text'>• They are also used by folk groups.</div>
        <div className='wet-title'>Symbolism:</div>
        <div className='wet-text'>• Folk Costumes are an important element of Polish culture and symbolism.</div>
        <div className='wet-text'>• They reflect local history and customs.</div>
      </div>
    </>
  );
};

export default WetMonday;