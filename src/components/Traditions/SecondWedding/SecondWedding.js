import React, { useEffect } from 'react';
import img from '../../../assets/SecondWedding.png';
import './SecondWedding.css';
import { useLanguage } from '../../language';

const SecondWedding = () => {
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
      <p className="wedding-title1">Second Wedding</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Second Wedding"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='wedding-rect'>
        <div className='wedding-title'>Polish Folk Costumes</div>
        <div className='wedding-text'>Polish folk costumes are rich and diverse, reflecting the wedding of individual regions.
        Here is some general information:</div>
        <div className='wedding-title'>Diversity:</div>
        <div className='wedding-text'>• Each region of Poland has its own unique costumes, differing in colors, patterns, and elements.</div>
        <div className='wedding-text'>• The most well-known include costumes from: Krákow, Łowicz, and the mountains (Góralski)</div>
        <div className='wedding-title'>Costume Elements:</div>
        <div className='wedding-text'>•<b>Women: </b> skirts, blouses, corsets, shawls, necklaces.</div>
        <div className='wedding-text'>•<b>Man: </b> trousers, shirts, vests, belts, hats.</div>
        <div className='wedding-title'>Ocasions:</div>
        <div className='wedding-text'>• Folk Costumes are worn during holidays, festivals, and regional celebrations.</div>
        <div className='wedding-text'>• They are also used by folk groups.</div>
        <div className='wedding-title'>Symbolism:</div>
        <div className='wedding-text'>• Folk Costumes are an important element of Polish culture and symbolism.</div>
        <div className='wedding-text'>• They reflect local history and customs.</div>
      </div>
    </>
  );
};

export default SecondWedding;