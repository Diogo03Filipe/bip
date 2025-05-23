import React, { createContext, useState, useContext } from 'react';
import ukBanner from '../assets/uk_banner.png'
import plBanner from '../assets/pl_banner.png'


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const translations = {
    en: {
      welcome: ukBanner,
      home: "Home",
      locations: "Locations",
      gastronomy: "Gastronomy",
      traditions: "Traditions",
      elderlyHomes: "Elderly Homes",
      menuItems: {
        zakliczyn: "Zakliczyn",
        melsztyn: "Melsztyn",
        musicCenter: "Music Center",
        eurovelo: "Eurovelo Mostek",
        stIdzi: "St. Idzi Zakliczyn",
      },
      zakliczyn: {
        title: "Zakliczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      melsztyn: {
        title: "Melsztyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      MusicCenter: {
        title: "Music Center",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      EuroveloMostek: {
        title: "Eurovelo Mostek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      StIdziZakliczyn: {
        title: "St. Idzi Zakliczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      discoverTitle: "Discover More About Our Region",
      discoverText: "Explore local attractions, food, culture, and community living in our town.",
    },

    pl: {
      welcome: plBanner,
      home: "Strona główna",
      locations: "Lokalizacje",
      gastronomy: "Gastronomia",
      traditions: "Tradycje",
      elderlyHomes: "Domy dla osób starszych",
      menuItems: {
        zakliczyn: "Zakliczyn",
        melsztyn: "Melsztyn",
        musicCenter: "Centrum Muzyczne",
        eurovelo: "Eurovelo Mostek",
        stIdzi: "Św. Idzi Zakliczyn",
      },
      zakliczyn: {
        title: "Zakliczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      melsztyn: {
        title: "Melsztyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      MusicCenter: {
        title: "Centrum Muzyczne",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      EuroveloMostek: {
        title: "Eurovelo Mostek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      StIdziZakliczyn: {
        title: "St. Idzi Zakliczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      discoverTitle: "Odkryj więcej o naszym regionie",
      discoverText: "Poznaj lokalne atrakcje, jedzenie, kulturę i życie społeczności w naszym mieście.",
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }
    }>
      {children}
    </LanguageContext.Provider >
  );
};

export const useLanguage = () => useContext(LanguageContext);