import { useLanguage } from '../language';

import FolkCostumes from '../../assets/FolkCostumes.png';
import FatThursday from '../../assets/FatThursday.png';
import WetMonday from '../../assets/WetMonday.png';
import SecondWedding from '../../assets/SecondWedding.png';

import './Traditions.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Traditions = () => {

    const { language, setLanguage, translations } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pl' : 'en');
    };

    useEffect(() => {
        // Set background color for THIS PAGE
        document.body.style.backgroundColor = '#ffe8ff'; // Replace with your desired color

        // Cleanup: Reset background when leaving the page
        return () => {
            document.body.style.backgroundColor = ''; // Revert to default
        };
    }, []);

    return (
        <>
            <div className='traditions-names1'>Folk Costumes</div>
            <Link to="FolkCostumes">
                <div className='costumes-traditions'>
                    <img src={FolkCostumes} alt="Folk Costumes" className="full-width-img" />
                </div>
            </Link>

            <div className='traditions-names'>Fat Thursday</div>
            <Link to="FatThursday">
                <div className='costumes-traditions'>
                    <img src={FatThursday} alt="Folk Costumes" className="full-width-img" />
                </div>
            </Link>

            <div className='traditions-names'>Wet Monday</div>
            <Link to="WetMonday">
                <div className='costumes-traditions'>
                    <img src={WetMonday} alt="Folk Costumes" className="full-width-img" />
                </div>
            </Link>

            <div className='traditions-names'>Second Wedding</div>
            <Link to="SecondWedding">
                <div className='costumes-traditions'>
                    <img src={SecondWedding} alt="Folk Costumes" className="full-width-img" />
                </div>
            </Link>
        </>
    );
};

export default Traditions;