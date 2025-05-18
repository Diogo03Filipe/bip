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
            <Link to="Locations/cityCenter" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.zakliczyn}
            </Link>
            <Link to="Locations/melsztyn" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.melsztyn}
            </Link>
            <Link to="Locations/musicCenter" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.musicCenter}
            </Link>
            <Link to="Locations/EuroveloMotesk" className="dropdown-item" onClick={closeDropdown}>
              {translations[language].menuItems.eurovelo}
            </Link>
            <Link to="Locations/StIdzi" className="dropdown-item" onClick={closeDropdown}>
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
            <Link to="Gastronomy/CakeWithBeans" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Cake with Beans' : 'Ciasto z fasoli'}
            </Link>
            <Link to="Gastronomy/BeanPastries" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Bean Pastries' : 'Ciastka fasolowe'}
            </Link>
            <Link to="Gastronomy/Borscht" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Borscht' : 'Barszcz'}
            </Link>
            <Link to="Gastronomy/BakedBeans" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Baked Beans' : 'Fasolka po Bretońsku'}
            </Link>
            <Link to="Gastronomy/SourRyeSoup" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Sour rye soup' : 'Żurek'}
            </Link>
            <Link to="Gastronomy/Pierogi" className="dropdown-item" onClick={closeDropdown}>
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
            <Link to="Traditions/FolkCostumes" className="dropdown-item" onClick={closeDropdown}>
              {language === 'en' ? 'Folk Costumes' : 'Stroje ludowe'}
            </Link>
            <Link to="Traditions/RetirementHomes" className="dropdown-item" onClick={closeDropdown}>
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