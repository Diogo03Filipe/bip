import React, { createContext, useState, useContext } from 'react';
import ukBanner from '../assets/uk_banner.png'
import plBanner from '../assets/pl_banner.png'
import RetirementHomes from './Traditions/Retirement Homes/RetirementHomes';


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
      elderlyHomes: "Retirement Homes",
      menuItems: {
        zakliczyn: "Zakliczyn",
        melsztyn: "Melsztyn",
        musicCenter: "Music Center",
        eurovelo: "Eurovelo Mostek",
        stIdzi: "St. Idzi Zakliczyn",
      },
      zakliczyn: {
        title: "Zakliczyn",
        description: ""
      },
      melsztyn: {
        title: "Melsztyn",
        description: ""
      },
      MusicCenter: {
        title: "Music Center",
        description: ""
      },
      EuroveloMostek: {
        title: "Eurovelo Mostek",
        description: ""
      },
      StIdziZakliczyn: {
        title: "St. Idzi Zakliczyn",
        description: "",
      },
      RetirementHomes: {
        title: "Retirement Homes",
        text1: "In Poland, retirement homes, also known as care homes or senior homes, play a crucial role in caring for the elderly. Here are some key aspects regarding these facilities:",
        title2: "Public Care Homes:",
        text3: "• Run by local governments.",
        text4: "• The costs of stay are partially funded by the state.",
        text5: "• Often have long wait lists.",
        title3: "Services Offered:",
        text7: "• 24-Hour Care: Assistance with daily activities, such as eating, dressing, and personal hygiene.",
        text8: "• Medical Care: Monitoring health conditions, administering medications, and rehabilitation.",
        text9: "• Nutrion: Balanced meals tailored to the needs of seniors.",
        text10: "• Recreation and Therapeutic Activities: Organized to activate seniors and improve their well-being.",
        text11: "• Psychological Care: Emotional support for residents.",
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
      elderlyHomes: "Domy spokojnej starości",
      menuItems: {
        zakliczyn: "Zakliczyn",
        melsztyn: "Melsztyn",
        musicCenter: "Centrum Muzyczne",
        eurovelo: "Eurovelo Mostek",
        stIdzi: "Św. Idzi Zakliczyn",
      },
      zakliczyn: {
        title: "Zakliczyn",
        description: ""
      },
      melsztyn: {
        title: "Melsztyn",
        description: ""
      },
      MusicCenter: {
        title: "Centrum Muzyczne",
        description: ""
      },
      EuroveloMostek: {
        title: "Eurovelo Mostek",
        description: ""
      },
      StIdziZakliczyn: {
        title: "St. Idzi Zakliczyn",
        description: ""
      },
      RetirementHomes: {
        title: "Domy spokojnej starości",
        text1: "W Polsce domy spokojnej starości, znane również jako domy opieki lub domy seniorów, odgrywają kluczową rolę w opiece nad osobami starszymi. Oto kilka kluczowych aspektów dotyczących tych placówek:",
        title2: "Domy opieki publicznej:",
        text3: "• Zarządzane przez władze lokalne.",
        text4: "• Koszty pobytu pokrywane są częściowo ze środków państwa.",
        text5: "• Często mają długie listy oczekujących.",
        title3: "• Oferowane usługi:",
        text7: "• Opieka 24-godzinna: Pomoc w codziennych czynnościach, takich jak jedzenie, ubieranie się i higiena osobista.",
        text8: "• Opieka medyczna: monitorowanie stanu zdrowia, podawanie leków i rehabilitacja.",
        text9: "• Odżywianie: Zbilansowane posiłki dostosowane do potrzeb seniorów.",
        text10: "• Zajęcia rekreacyjno-terapeutyczne: organizowane w celu aktywizacji seniorów i poprawy ich samopoczucia.",
        text11: "• Opieka psychologiczna: wsparcie emocjonalne dla mieszkańców.",
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