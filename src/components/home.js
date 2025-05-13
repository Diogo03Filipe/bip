import React from 'react';
import Slider from 'react-slick';
import zaklinczyn from '../assets/zaklinczyn.png';
import melsztyn from '../assets/melsztyn.png';
import euroveloMotesk from '../assets/EuroveloMostek.png';
import StIdzi from '../assets/StIdzi.png';
import musicCenter from '../assets/musicCenter.png';
import './home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const images = [zaklinczyn, melsztyn, euroveloMotesk, StIdzi, musicCenter];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <div className="home-slider">
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              className="img"
              onError={(e) => {
                console.error('Image failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
