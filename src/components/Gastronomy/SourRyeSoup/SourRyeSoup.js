import React, { useEffect } from 'react';
import img from '../../../assets/SourRyeSoup.png';
import './SourRyeSoup.css';
import { useLanguage } from '../../language';

const SourRyeSoup = () => {
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
      <p className="sour-text">Sour Rye Soup</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Sour Rye Soup"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='sour-description-rect'>
        <div className='sour-description'>Sour Rye Soup is a traditional Polish sour rye soup. It's hearty and distinctive dish with a unique flavor profile.</div>
      </div>
      <div className='sour-ingredients-rect'>
        <div className='sour-ingredients-text'>Ingredients</div>
        <div className='sour-ingredients'>• Polish Sausage</div>
        <div className='sour-ingredients'>• Smoked Bacon or ham</div>
        <div className='sour-ingredients'>• Potatoes</div>
        <div className='sour-ingredients'>• Hard-boiled eggs</div>
        <div className='sour-ingredients'>• Onions and Garlic</div>
        <div className='sour-ingredients'>• Marjoram and orther spices</div>
      </div>
      <div className='sour-instructions-rect'>
        <div className='sour-instructions-text'>Characteristics</div>
        <div className='sour-instructions'>• Sour Base: The defining feature of 'żurek' is its sour, fermented base made from rye flour. 
        This 'zakwas' (sourdoug starter) gives the soup its characteristic tang.</div>
        <div className='sour-instructions'>• Variations: There are regional variations of 'żurek'. Some variations may inclue mushrooms, horseradish, or other additions.</div>
        <div className='sour-instructions'>• Traditional Significance: Żurek is often associated with Easter in Poland, where it's a popular dish served during the holiday.
         It is also a common comfort food enjoyed throughout the year.</div>
        
        <div className='sour-tips-text'>How it's Served</div>
        <div className='sour-tips'>• Żurek is often served in a bowl or, for a more traditional presentation, in a hollowed-out loaf of bread.</div>
        <div className='sour-tips'>• It's typically garnished with hard-boiled egg halves and fresh herbs.</div>
      </div>
    </>
  );
};

export default SourRyeSoup;