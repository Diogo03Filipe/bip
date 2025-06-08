import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './language';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const wrapperRef = useRef(null);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setExpandedSection(null);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Function to return sidebar background color based on current route
  const getSidebarBgColor = () => {
    switch (location.pathname) {
      case '/':
        return '#fcece3';
      case '/Locations':
      case '/Locations/cityCenter':
      case '/Locations/melsztyn':
      case '/Locations/EuroveloMotesk':
      case '/Locations/musicCenter':
      case '/Locations/StIdzi':
        return '#acd8fc';
      case '/Gastronomy':
      case '/Gastronomy/CakeWithBeans':
      case '/Gastronomy/BakedBeans':
      case '/Gastronomy/Borscht':
      case '/Gastronomy/BeanPastries':
      case '/Gastronomy/Pierogi':
      case '/Gastronomy/SourRyeSoup':
        return '#fcece3';
      case '/Traditions':
      case '/Traditions/FolkCostumes':
      case '/Traditions/FatThursday':
      case '/Traditions/WetMonday':
      case '/Traditions/SecondWedding':
        return '#fcedfc';
      case '/ElderlyHomes/RetirementHomes':
      case '/RetirementHomes':
        return '#efffcc';
      default:
        return '#e8e8e8';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSidebarOpen(false);
        setExpandedSection(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-wrapper" ref={wrapperRef}>
      <div className="navbar-header">
        <button className="hamburger" onClick={toggleSidebar}>
          {sidebarOpen ? '×' : '☰'}
        </button>
        <div className="lang" onClick={toggleLanguage}>
          <img
            src={translations[language].welcome}
            alt={language === 'en' ? 'English' : 'Polish'}
            className="lang-img"
          />
        </div>
      </div>

      <div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{ backgroundColor: getSidebarBgColor() }}
      >
        <button className="close-btn" onClick={toggleSidebar}>×</button>


        <div className="menu-section">
          <Link to="/" className="section-header" onClick={toggleSidebar}>
            {translations[language].home}
          </Link>
        </div>

        {/* LOCATIONS */}
        <div className="menu-section">
          <div className="section-header" onClick={() => toggleSection('locations')}>
            {translations[language].locations}
          </div>
          {expandedSection === 'locations' && (
            <div className="section-items">
              <Link to="Locations/cityCenter" onClick={toggleSidebar}>{translations[language].menuItems.zakliczyn}</Link>
              <Link to="Locations/melsztyn" onClick={toggleSidebar}>{translations[language].menuItems.melsztyn}</Link>
              <Link to="Locations/musicCenter" onClick={toggleSidebar}>{translations[language].menuItems.musicCenter}</Link>
              <Link to="Locations/EuroveloMotesk" onClick={toggleSidebar}>{translations[language].menuItems.eurovelo}</Link>
              <Link to="Locations/StIdzi" onClick={toggleSidebar}>{translations[language].menuItems.stIdzi}</Link>
            </div>
          )}
        </div>

        {/* GASTRONOMY */}
        <div className="menu-section">
          <div className="section-header" onClick={() => toggleSection('gastronomy')}>
            {translations[language].gastronomy}
          </div>
          {expandedSection === 'gastronomy' && (
            <div className="section-items">
              <Link to="Gastronomy/CakeWithBeans" onClick={toggleSidebar}>{language === 'en' ? 'Polish Bean Cake' : 'Ciasto z fasoli'}</Link>
              <Link to="Gastronomy/BeanPastries" onClick={toggleSidebar}>{language === 'en' ? 'Bean Pastries' : 'Ciastka fasolowe'}</Link>
              <Link to="Gastronomy/Borscht" onClick={toggleSidebar}>{language === 'en' ? 'Borscht' : 'Barszcz'}</Link>
              <Link to="Gastronomy/BakedBeans" onClick={toggleSidebar}>{language === 'en' ? 'Baked Beans' : 'Fasolka po Bretońsku'}</Link>
              <Link to="Gastronomy/SourRyeSoup" onClick={toggleSidebar}>{language === 'en' ? 'Sour rye soup' : 'Żurek'}</Link>
              <Link to="Gastronomy/Pierogi" onClick={toggleSidebar}>Pierogi</Link>
            </div>
          )}
        </div>

        {/* TRADITIONS */}
        <div className="menu-section">
          <div className="section-header" onClick={() => toggleSection('traditions')}>
            {translations[language].traditions}
          </div>
          {expandedSection === 'traditions' && (
            <div className="section-items">
              <Link to="Traditions/FolkCostumes" onClick={toggleSidebar}>{language === 'en' ? 'Folk Costumes' : 'Stroje ludowe'}</Link>
              <Link to="Traditions/FatThursday" onClick={toggleSidebar}>{language === 'en' ? 'Fat Thursday' : 'Tłusty Czwartek'}</Link>
              <Link to="Traditions/WetMonday" onClick={toggleSidebar}>{language === 'en' ? 'Wet Monday' : 'Śmigus Dyngus'}</Link>
              <Link to="Traditions/SecondWedding" onClick={toggleSidebar}>{language === 'en' ? 'Second Wedding' : 'Poprawiny'}</Link>
            </div>
          )}
        </div>

        {/* ELDERLY HOMES */}
        <div className="menu-section">
          <div className="section-header" onClick={() => toggleSection('elderlyHomes')}>
            {translations[language].elderlyHomes}
          </div>
          {expandedSection === 'elderlyHomes' && (
            <div className="section-items">
              <Link to="ElderlyHomes/RetirementHomes" onClick={toggleSidebar}>
                {language === 'en' ? 'Retirement Homes' : 'Domy Spokojnej Starości'}
              </Link>
            </div>
          )}
        </div>
        <div className="menu-section">
          <Link to="AboutUs/AboutUs" className="section-header" onClick={toggleSidebar}>
            {translations[language].AboutUs}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;