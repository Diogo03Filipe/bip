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
      <p className="folk-title1">Folk Costumes</p>
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
        <div className='folk-title'>Polish Folk Costumes</div>
        <div className='folk-text'>Polish folk costumes are rich and diverse, reflecting the folk of individual regions.
        Here is some general information:</div>
        <div className='folk-title'>Diversity:</div>
        <div className='folk-text'>• Each region of Poland has its own unique costumes, differing in colors, patterns, and elements.</div>
        <div className='folk-text'>• The most well-known include costumes from: Krákow, Łowicz, and the mountains (Góralski)</div>
        <div className='folk-title'>Costume Elements:</div>
        <div className='folk-text'>•<b>Women: </b> skirts, blouses, corsets, shawls, necklaces.</div>
        <div className='folk-text'>•<b>Man: </b> trousers, shirts, vests, belts, hats.</div>
        <div className='folk-title'>Ocasions:</div>
        <div className='folk-text'>• Folk Costumes are worn during holidays, festivals, and regional celebrations.</div>
        <div className='folk-text'>• They are also used by folk groups.</div>
        <div className='folk-title'>Symbolism:</div>
        <div className='folk-text'>• Folk Costumes are an important element of Polish culture and symbolism.</div>
        <div className='folk-text'>• They reflect local history and customs.</div>
      </div>
    </>
  );
};

export default FolkCostumes;