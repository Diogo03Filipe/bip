import React, { useEffect } from 'react';
import img from '../../../assets/Borscht.png';
import './Borscht.css';
import { useLanguage } from '../../language';

const Borscht = () => {
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
      <p className="borscht-text">Borscht</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Borscht"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='borscht-description-rect'>
        <div className='borscht-description'>Borscht with Beans is an interesting variation of traditional Borscht, 
        combining sweet and sour taste of beets with the satisfying addition of beans.</div>
      </div>
      <div className='borscht-ingredients-rect'>
        <div className='borscht-ingredients-text'>Ingredients (Examples):</div>
        <div className='borscht-ingredients'>• Beets</div>
        <div className='borscht-ingredients'>• Carrots</div>
        <div className='borscht-ingredients'>• Parsley Root</div>
        <div className='borscht-ingredients'>• Celery Root</div>
        <div className='borscht-ingredients'>• Onion</div>
        <div className='borscht-ingredients'>• Garlic</div>
        <div className='borscht-ingredients'>• Beans (white, red, or pinto)</div>
        <div className='borscht-ingredients'>• Vegetable broth</div>
        <div className='borscht-ingredients'>• Vinegar or Lemon Juice</div>
        <div className='borscht-ingredients'>• Sugar (Optional)</div>
        <div className='borscht-ingredients'>• Spices (Bay Leaf, allspice, pepper, salt)</div>
      </div>
      <div className='borscht-instructions-rect'>
        <div className='borscht-instructions-text'>Instructions</div>
        <div className='borscht-instructions'>1. Cook the root vegetables and beets in the borth until tender.</div>
        <div className='borscht-instructions'>2. Cook the beans seperatly or add them to the soup towards the end of cooking.</div>
        <div className='borscht-instructions'>3. Blend or grate the beets and some of the vegetables.</div>
        <div className='borscht-instructions'>4. Add the beans, vinegar or lemon juice, sugar (optional), and spices.</div>
        <div className='borscht-instructions'>5. Cook for a few more minutes to allow the flavors to combine.</div>
        <div className='borscht-instructions'>6. Serve with bread, potatoes or other accompaniments.</div>
        
        <div className='borscht-tips-text'>Characteristics</div>
        <div className='borscht-tips'>• Borscht with Beans is a soup that combines the traditional ingredients of borscht (beets, root vegetables) with the adition of beans.</div>
        <div className='borscht-tips'>• Beans add thickness, satiety, and nutritional value to the soup.</div>
        <div className='borscht-tips'>• It can be served both hot or cold, depending on preference.</div>
        <div className='borscht-tips'>• It is a vegetarian or vegan dish depending on the ingredients used (e.g., vegetable broth).</div>
      </div>
    </>
  );
};

export default Borscht;