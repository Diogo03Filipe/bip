import { useLanguage } from './language';

import zakliczyn from '../assets/zakliczyn.png';
import melsztyn from '../assets/melsztyn.png';
import euroveloMotesk from '../assets/EuroveloMostek.png';
import StIdzi from '../assets/StIdzi.png';
import musicCenter from '../assets/musicCenter.png';

import BakedBeans from '../assets/BakedBeans.png';
import BeanPastries from '../assets/BeanPastries.png';
import Borscht from '../assets/Borscht.png';
import CakeWithBeans from '../assets/CakeWithBeans.png';
import Pierogi from '../assets/Pierogi.png';
import SourRyeSoup from '../assets/SourRyeSoup.png';

import FolkCostumes from '../assets/FolkCostumes.png';
import FatThursday from '../assets/FatThursday.png';
import WetMonday from '../assets/WetMonday.png';
import SecondWedding from '../assets/SecondWedding.png';

import RetirementHomes from '../assets/RetirementHomes.png';

import './home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const { language, setLanguage, translations } = useLanguage();

  const [locationIndex, setLocationIndex] = useState(0);
  const [gastronomyIndex, setGastronomyIndex] = useState(0);
  const [traditionIndex, setTraditionIndex] = useState(0);
  const [homesIndex, setHomesIndex] = useState(0);

  const locations = [zakliczyn, melsztyn, euroveloMotesk, StIdzi, musicCenter];
  const gastronomy = [BakedBeans, BeanPastries, Borscht, CakeWithBeans, Pierogi, SourRyeSoup];
  const traditions = [FolkCostumes, FatThursday, WetMonday, SecondWedding];
  const homes = [RetirementHomes]; // Not rotating here (yet)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#f7ddd0';

    const interval = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % locations.length);
      setGastronomyIndex((prev) => (prev + 1) % gastronomy.length);
      setTraditionIndex((prev) => (prev + 1) % traditions.length);
      setHomesIndex((prev) => (prev + 1) % homes.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      document.body.style.backgroundColor = '';
    };
  }, [locations.length, gastronomy.length, traditions.length]);

  return (
    <>
      <div className='locations-home'>{language === 'en' ? 'Places to Visit' : 'Stroje ludowe'}</div>
      <Link to='/Locations'>
        <img
          src={locations[locationIndex]}
          alt={`Location Slide ${locationIndex + 1}`}
          className="img"
          onError={(e) => {
            console.error('Location image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </Link>

      <div className='gastronomy-home'>{language === 'en' ? 'Gastronomy' : 'Gastronomia'}</div>
      <Link to='/Gastronomy'>
        <img
          src={gastronomy[gastronomyIndex]}
          alt={`Gastronomy Slide ${gastronomyIndex + 1}`}
          className="img"
          onError={(e) => {
            console.error('Gastronomy image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </Link>

      <div className='traditions-home'>{language === 'en' ? 'Traditions' : 'Tradycje'}</div>
      <Link to='/Traditions'>        <img
        src={traditions[traditionIndex]}
        alt={`Tradition Slide ${traditionIndex + 1}`}
        className="img"
        onError={(e) => {
          console.error('Tradition image failed to load:', e.target.src);
          e.target.style.display = 'none';
        }}
      />
      </Link>

      <div className='retirement-home'>{language === 'en' ? 'Retirement Homes' : 'Domy Spokojnej Starości'}</div>
      <Link to='/RetirementHomes'>
        <img
          src={homes[homesIndex]}
          alt={`Tradition Slide ${homesIndex + 1}`}
          className="img"
          onError={(e) => {
            console.error('Tradition image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </Link>
    </>
  );
};

export default Home;