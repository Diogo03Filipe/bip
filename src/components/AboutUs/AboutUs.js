import ZaklinczynPdf from '../../assets/Zacklynsfinalproject.pdf';
import GamificationPdf from '../../assets/GamificationProject.pdf';
import './AboutUs.css';
import { useLanguage } from '../language.js';
import React, { useEffect } from 'react';

const AboutUs = () => {

    const { language } = useLanguage();

    useEffect(() => {
            // Set background color for THIS PAGE
            document.body.style.backgroundColor = '#e7fcb8'; // Replace with your desired color
    
            // Cleanup: Reset background when leaving the page
            return () => {
                document.body.style.backgroundColor = ''; // Revert to default
            };
        }, []);

    return (
        <div className='text'>
            <h1>{language === 'en' ? 'About our Project' : 'O naszym projekcie'}</h1>
            <p>{language === 'en' ? 'Here you can learn more about our project.' : 'Tutaj możesz dowiedzieć się więcej o naszym projekcie.'}</p>
            <a href={ZaklinczynPdf} download="AboutUsDocument.pdf">
                {language === 'en' ? 'Download our Zackliczyn Network Project!' : 'Pobierz nasz projekt sieciowy Zackliczyn!'}
            </a>
            <br></br>
            <br></br>
            <a href={GamificationPdf} download="GamificationProject.pdf">
                {language === 'en' ? 'Download our Gamification Project!' : 'Pobierz nasz projekt grywalizacji!'}
            </a>

        </div>
    );
};

export default AboutUs;
