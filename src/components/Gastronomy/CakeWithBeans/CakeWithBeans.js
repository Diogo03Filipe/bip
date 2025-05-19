import React, { useEffect } from 'react';
import img from '../../../assets/CakeWithBeans.png';
import './CakeWithBeans.css';
import { useLanguage } from '../../language';

const CakeWithBeans = () => {
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
      <p className="text">Polish Bean Cake</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Cake With Beans"
            className="full-width-img"
          />
        </div>
      </div>
      <div className='description-rect'>
        <div className='description'>This recipe is inspired by the Portuguese "pastéis de feijão", 
        but adapted to be more like a cake. It's moist, delicious and surprisingly made with white beans!</div>
      </div>
      <div className='ingredients-rect'>
        <div className='ingredients-text'>Ingredients</div>
        <div className='ingredients'>• 1 (15 ounces) can cannellini beans, rinsed and drained very well</div>
        <div className='ingredients'>• 3 large eggs</div>
        <div className='ingredients'>• 1/2 cup of granulated sugar</div>
        <div className='ingredients'>• 1/4 cup unsalted butter, melted and cooled</div>
        <div className='ingredients'>• 1 teaspoon vanilla extract</div>
        <div className='ingredients'>• 1/4 tea spoon almond extract</div>
        <div className='ingredients'>• 1/4 ground almonds</div>
        <div className='ingredients'>• 1/4 teaspoon salt</div>
        <div className='ingredients'>• Powdered sugar for dustig (Opticional)</div>
      </div>
      <div className='instructions-rect'>
        <div className='instructions-text'>Instructions</div>
        <div className='instructions'>1. Preheat the oven at 175ºC (350ºF). Grease and flour a 9-inch round cake pan.</div>
        <div className='instructions'>2. In a food processor or blender, combine the beans, eggs, sugar, melted butter,
        vanilla extract, almond extract, ground almonds, and salt. Process until completly smooth.</div>
        <div className='instructions'>3. Pour the batter into the prepared pan and bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.</div>
        
        <div className='tips-text'>Tips</div>
        <div className='tips'>• Make sure to drain and rinse the beans very well to avoid a beany flavour.</div>
        <div className='tips'>• You can replace the cannellini beans with another type of white beans, such as navy beans or Great Northern beans.</div>
        <div className='tips'>• If you don't have ground almonds, you can use almond flour or finely chopped almonds.</div>
        <div className='tips'>• Serve the cake with a dollop of whipped cream or a scoop of ice cream.</div>
      </div>
    </>
  );
};

export default CakeWithBeans;