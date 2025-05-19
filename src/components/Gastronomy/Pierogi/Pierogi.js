import React, { useEffect } from 'react';
import img from '../../../assets/Pierogi.png';
import './Pierogi.css';
import { useLanguage } from '../../language';

const Pierogi = () => {
  const { language, translations } = useLanguage();


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
      <p className="text">Pierogi</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Pierogi"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='pierogi-description-rect'>
        <div className='pierogi-description'>Pierogi are a beloved and iconic Polish dumpling.
        They're a staple of Polish cuisine and are enjoyed in many variations. Here's a breakdown of what makes pierogi so special:</div>
      </div>
      <div className='pierogi-ingredients-rect'>
        <div className='pierogi-ingredients-text'>Characteristics</div>
        <div className='pierogi-ingredients'>• <b>Dough:</b> The dough is traditionally made from flour, water, eggs (sometimes), and a bit of salt.
        It's rolled out thinly and cut out into circles or squares.</div>
        <div className='pierogi-ingredients'>• <b>Fillings:</b></div>
        <div className='pierogi-ingredients'>• Potato and Cheese (Pierogi Ruskie): A classic combination of mashed potatoes and farmer's cheese or white cheese.</div>
        <div className='pierogi-ingredients'>• Meat (Pierogi z Mięsem): Filled with ground meat, often pork or beef, seasoned with onions and spices.</div>
        <div className='pierogi-ingredients'>• Cabbage and Mushroom (Pierogi z Kapustą i Grzybami): A vegetarian option with a flavorful filling of sauerkraut and mushrooms.</div>
      </div>
      <div className='pierogi-instructions-rect'>
        <div className='pierogi-instructions-text'>Instructions</div>
        <div className='pierogi-instructions'>Pierogi are typically boiled until they float, and then they can be pan-fried or baked for added flavor and texture</div>

        <div className='pierogi-tips-text'>Pierogi are often served with:</div>
        <div className='pierogi-tips'>• Sour cream.</div>
        <div className='pierogi-tips'>• Fried onions.</div>
        <div className='pierogi-tips'>• Melted butter.</div>
        <div className='pierogi-tips'>• Bacon bits.</div>
        <div className='pierogi-tips'>• Sometimes with sugar or fruit sauces for sweet varieties.</div>
      </div>
    </>
  );
};

export default Pierogi;