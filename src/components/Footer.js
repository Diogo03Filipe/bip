import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './language';
import './Footer.css';

const Footer = () => {
  const { language, translations } = useLanguage();
  const location = useLocation();

  const getFooterStyles = () => {
    switch (location.pathname) {
      case '/':
        return { backgroundColor: '#e5c4b3', borderTop: '4px solid #d3a690' };
      case '/Locations/cityCenter':
      case '/Locations/melsztyn':
      case '/Locations/EuroveloMotesk':
      case '/Locations/musicCenter':
      case '/Locations/StIdzi':
        return { backgroundColor: '#91c3f0', borderTop: '4px solid #7bb0dd' };
      case '/Gastronomy/CakeWithBeans':
      case '/Gastronomy/BakedBeans':
      case '/Gastronomy/Borscht':
      case '/Gastronomy/BeanPastries':
      case '/Gastronomy/Pierogi':
      case '/Gastronomy/SourRyeSoup':
      case '/Gastronomy':
        return { backgroundColor: '#e5c4b3', borderTop: '4px solid #d3a690' };
      case '/Traditions':
      case '/Traditions/FolkCostumes':
      case '/Traditions/FatThursday':
      case '/Traditions/WetMonday':
      case '/Traditions/SecondWedding':
        return { backgroundColor: '#eacfe9', borderTop: '4px solid #d2b3cf' };
      case '/ElderlyHomes/RetirementHomes':
      case '/RetirementHomes':
        return { backgroundColor: '#d8eca4', borderTop: '4px solid #bed78a' };
      default:
        return { backgroundColor: '#cccccc', borderTop: '4px solid #b0b0b0' };
    }
  };

  return (
    <div className="bottom-header" style={getFooterStyles()}>
      <h2>{translations[language].discoverTitle}</h2>
      <p>{translations[language].discoverText}</p>
    </div>
  );
};

export default Footer;