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
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Cake with Beans' : 'Ciasto z fasoli'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Bean Pastries' : 'Ciastka fasolowe'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Borscht' : 'Barszcz'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Baked Beans' : 'Fasolka po Bretońsku'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Sour rye soup' : 'Żurek'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Pierogi' : 'Pierogi'}
            </Link>
          </div>
        )}
      </div>

      {/* Traditions Dropdown */}
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          onClick={() => toggleDropdown('traditions')}
        >
          {translations[language].traditions}
        </button>
        {openDropdown === 'traditions' && (
          <div className="dropdown-menu">
            <Link to="anotherLink1" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Folk Costumes' : 'Stroje ludowe'}
            </Link>
            <Link to="anotherLink2" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Retirement Homes' :
                <span style={{ display: 'inline-block' }}>Domy Spokojnej <br /> Starosci</span>}
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