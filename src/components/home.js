import zakliczyn from '../assets/zakliczyn.png';
import melsztyn from '../assets/melsztyn.png';
import euroveloMotesk from '../assets/EuroveloMostek.png';
import StIdzi from '../assets/StIdzi.png';
import musicCenter from '../assets/musicCenter.png';
import './home.css';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [zakliczyn, melsztyn, euroveloMotesk, StIdzi, musicCenter];

  useEffect(() => {
    console.log('Home component mounted');
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImage = (prevImage + 1) % images.length;
        console.log('Switching to image index:', nextImage);
        return nextImage;
      });
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
      console.log('Home component unmounted, interval cleared');
    };
  }, [images.length]);

  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <img
      src={images[currentImage]}
      alt={`Slide ${currentImage + 1}`}
      className="img"
      onError={(e) => {
        console.error('Image failed to load:', e.target.src);
        e.target.style.display = 'none';
      }}
    />
  );
};

export default Home;
