import { useLanguage } from '../language';

import CakeWithBeans from '../../assets/CakeWithBeans.png';
import BeanPastries from '../../assets/BeanPastries.png';
import Borscht from '../../assets/Borscht.png';
import BakedBeans from '../../assets/BakedBeans.png';
import Pierogi from '../../assets/Pierogi.png';
import SourRyeSoup from '../../assets/SourRyeSoup.png';

import './Gastronomy.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gastronomy = () => {

    const { language, setLanguage, translations } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pl' : 'en');
    };

    useEffect(() => {
        // Set background color for THIS PAGE
        document.body.style.backgroundColor = '#f7ddd0'; // Replace with your desired color

        // Cleanup: Reset background when leaving the page
        return () => {
            document.body.style.backgroundColor = ''; // Revert to default
        };
    }, []);

    return (
        <>
            <div className='gastronomy-names1'>{language === 'en' ? 'Polish Bean Cake' : 'Polskie Ciasto Fasolowe'}</div>
            <Link to="CakeWithBeans">
                <div className='costumes-traditions'>
                    <img src={CakeWithBeans} alt="Cake With Beans" className="full-width-img" />
                </div>
            </Link>

            <div className='gastronomy-names'>{language === 'en' ? 'Bean Pastries' : 'Ciastka fasolowe'}</div>
            <Link to="BeanPastries">
                <div className='costumes-traditions'>
                    <img src={BeanPastries} alt="Bean Pastries" className="full-width-img" />
                </div>
            </Link>

            <div className='gastronomy-names'>{language === 'en' ? 'Borscht' : 'Barszcz'}</div>
            <Link to="Borscht">
                <div className='costumes-traditions'>
                    <img src={Borscht} alt="Borscht" className="full-width-img" />
                </div>
            </Link>

            <div className='gastronomy-names'>{language === 'en' ? 'Baked Beans' : 'Pieczona fasola'}</div>
            <Link to="BakedBeans">
                <div className='costumes-traditions'>
                    <img src={BakedBeans} alt="Bake Beans" className="full-width-img" />
                </div>
            </Link>

            <div className='gastronomy-names'>{language === 'en' ? 'Sour Rye Soup' : 'Zupa żytnia na zakwasie'}</div>
            <Link to="SourRyeSoup">
                <div className='costumes-traditions'>
                    <img src={SourRyeSoup} alt="Sour Rye Soup" className="full-width-img" />
                </div>
            </Link>

            <div className='gastronomy-names'>{language === 'en' ? 'Pierogi' : 'Pierogi'}</div>
            <Link to="Pierogi">
                <div className='costumes-traditions'>
                    <img src={Pierogi} alt="Pierogi" className="full-width-img" />
                </div>
            </Link>
        </>
    );
};

export default Gastronomy;