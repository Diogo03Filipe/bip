import React, { useEffect } from 'react';
import img from '../../../assets/BakedBeans.png';
import './BakedBeans.css';
import { useLanguage } from '../../language';

const BakedBeans = () => {
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
      <p className="baked-text">Baked Beans</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Baked Beans"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='baked-description-rect'>
        <div className='baked-description'>Baked Beans is a popular and hearty dish from Polish cuisine, known for its rich flavor and simple preparation!</div>
      </div>
      <div className='baked-ingredients-rect'>
        <div className='baked-ingredients-text'>Ingredients</div>
        <div className='baked-ingredients'>• Beans (most often white)</div>
        <div className='baked-ingredients'>• Sausage (preferably smoked)</div>
        <div className='baked-ingredients'>• Smoked bacon</div>
        <div className='baked-ingredients'>• Onion</div>
        <div className='baked-ingredients'>• Garlic</div>
        <div className='baked-ingredients'>• Tomato puree or canned tomatoes</div>
        <div className='baked-ingredients'>• Spices: Marjoram, bay leaf, allspice, pepper, salt</div>
      </div>
      <div className='baked-instructions-rect'>
        <div className='baked-instructions-text'>Instructions</div>
        <div className='baked-instructions'>1. Soak the beans for several hours, then cook until soft.</div>
        <div className='baked-instructions'>2. Sauté the chopped onion, bacon and sausage in a pan.</div>
        <div className='baked-instructions'>3. Add the garlic and spices, then the tomato puree or canned tomatoes.</div>
        <div className='baked-instructions'>4. Add the coocked beans to the sauce and simmer everything together until the flavors combine.</div>
        <div className='baked-instructions'>5. Serve the dish hot, ofter with bread.</div>

        
        <div className='baked-tips-text'>Characteristics</div>
        <div className='baked-tips'>• It is a one pot dish whose main ingredients are beans, sausage, bacon and tomato sauce.</div>
        <div className='baked-tips'>• It's a very nutritious and warming dish, which is why it often appears on Polish tables during colder days.</div>
        <div className='baked-tips'>• Despite its name, this dish has nothing to do with Brittany in France. 
        The name probably comes from the term "à la bretonne", which in French cuisine means a dish with beans.</div>
      </div>
    </>
  );
};

export default BakedBeans;