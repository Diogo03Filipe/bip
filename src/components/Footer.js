import React from 'react';
import { useLanguage } from './language'; // Adjust path if needed
import './Footer.css';

const Footer = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="bottom-header">
      <h2>{translations[language].discoverTitle}</h2>
      <p>{translations[language].discoverText}</p>
    </div>
  );
};

export default Footer;