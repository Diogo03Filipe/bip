import { useLanguage } from '../language';

import EuroveloMotesk from '../../assets/EuroveloMostek.png';
import Melsztyn from '../../assets/melsztyn.png';
import MusicCenter from '../../assets/musicCenter.png';
import StIdzi from '../../assets/StIdzi.png';
import Zakliczyn from '../../assets/zakliczyn.png';


import './Locations.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {

    const { language, setLanguage, translations } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pl' : 'en');
    };

    useEffect(() => {
        // Set background color for THIS PAGE
        document.body.style.backgroundColor = '#93c9f5'; // Replace with your desired color

        // Cleanup: Reset background when leaving the page
        return () => {
            document.body.style.backgroundColor = ''; // Revert to default
        };
    }, []);

    return (
        <>
            <div className='locations-names1'>{language === 'en' ? 'Zakliczyn' : 'Zakliczyn'}</div>
            <Link to="cityCenter">
                <div className='locations'>
                    <img src={Zakliczyn} alt="Cake With Beans" className="full-width-img" />
                </div>
            </Link>

            <div className='locations-names'>{language === 'en' ? 'Melsztyn' : 'Melsztyn'}</div>
            <Link to="melsztyn">
                <div className='locations'>
                    <img src={Melsztyn} alt="Bean Pastries" className="full-width-img" />
                </div>
            </Link>

            <div className='locations-names'>{language === 'en' ? 'Music Center' : 'Centrum Muzyczne'}</div>
            <Link to="MusicCenter">
                <div className='costumes-traditions'>
                    <img src={MusicCenter} alt="Borscht" className="full-width-img" />
                </div>
            </Link>

            <div className='locations-names'>{language === 'en' ? 'Eurovelo Motesk' : 'Eurovelo Motesk'}</div>
            <Link to="EuroveloMotesk">
                <div className='costumes-traditions'>
                    <img src={EuroveloMotesk} alt="Bake Beans" className="full-width-img" />
                </div>
            </Link>

            <div className='locations-names'>{language === 'en' ? 'St Idzi' : 'Św. Idzi'}</div>
            <Link to="StIdzi">
                <div className='costumes-traditions'>
                    <img src={StIdzi} alt="Sour Rye Soup" className="full-width-img" />
                </div>
            </Link>
        </>
    );
};

export default Locations;