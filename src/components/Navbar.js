import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './language';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      {/* Locations Dropdown */}
      <div className="dropdown">
        <button 
          className="dropdown-toggle dropdown-basic"
          onClick={() => toggleDropdown('locations')}
        >
          {translations[language].locations}
        </button>
        {openDropdown === 'locations' && (
          <div className="dropdown-menu">
            <Link to="zakliczyn/cityCenter" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.zakliczyn}
            </Link>
            <Link to="melsztyn/melsztyn" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.melsztyn}
            </Link>
            <Link to="musicCenter/musicCenter" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.musicCenter}
            </Link>
            <Link to="euroveloMotesk/EuroveloMotesk" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.eurovelo}
            </Link>
            <Link to="StIdzi/StIdzi" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.stIdzi}
            </Link>
          </div>
        )}
      </div>

      {/* Gastronomy Dropdown */}
      <div className="dropdown">
        <button 
          className="dropdown-toggle"
          onClick={() => toggleDropdown('gastronomy')}
        >
          {translations[language].gastronomy}
        </button>
        {openDropdown === 'gastronomy' && (
          <div className="dropdown-menu">
            <Link to="anotherLink1" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Another Link 1' : 'Inny Link 1'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Another Link 2' : 'Inny Link 2'}
            </Link>
          </div>
        )}
      </div>

      {/* Language Toggle */}
      <div className="lang" onClick={toggleLanguage}>
        <img
          src={translations[language].welcome}
          alt={language === 'en' ? 'English' : 'Polish'}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default Navbar;