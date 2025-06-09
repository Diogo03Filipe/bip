import React, { useEffect, useRef } from 'react';
import img from '../../../assets/StIdzi.png';
import './StIdzi.css';
import { useLanguage } from '../../language'; // Adjust import path as needed

const StIdzi = () => {
  const { language, translations } = useLanguage();
  const mapRef = useRef(null);

  useEffect(() => {

    // HERE Maps initialization code (keep your existing logic)
    if (!window.H || !window.H.service) {
      console.error('❌ HERE Maps SDK not loaded.');
      return;
    }

    const platform = new window.H.service.Platform({
      apikey: 'rJh1Srtc2cV8Eof2_8VvwWaYWg16d_toLCg6HHtqChI',
    });

    const defaultLayers = platform.createDefaultLayers();
    const map = new window.H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 49.849997, lng: 20.816663 },
      }
    );

    const ui = window.H.ui.UI.createDefault(map, defaultLayers);
    ui.getControl('zoom').setVisibility(false);
    ui.getControl('mapsettings').setVisibility(false);

    new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
    const marker = new window.H.map.Marker({ lat: 49.856252, lng: 20.808794 });
    map.addObject(marker);

    // Set background color for THIS PAGE
    document.body.style.backgroundColor = '#93c9f5'; // Replace with your desired color
    // Cleanup: Reset background when leaving the page
    return () => {
      document.body.style.backgroundColor = ''; // Revert to default
      map.dispose(); // Cleanup map
    };
  }, []);

  return (
    <>
      <p className="idzi-title2">{translations[language].StIdzi.title}</p>
      <div className="city-center-container">

        {/* Full-width image section */}
        <div className="image-container">
          <img
            src={img}
            alt="St Idzi Zakliczyn city"
            className="full-width-img"
          />
        </div>

        <div className='idzi-rect'>
          <div className='idzi-description'>{translations[language].StIdzi.description}</div>
          <div className='idzi-title'>{translations[language].StIdzi.title2}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text2}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text3}</div>
          <div className='idzi-title'>{translations[language].StIdzi.title3}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text4}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text5}</div>
          <div className='idzi-title'>{translations[language].StIdzi.title4}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text6}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text7}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text8}</div>
          <div className='idzi-title'>{translations[language].StIdzi.title5}</div>
          <div className='idzi-description'>{translations[language].StIdzi.text9}</div>
        </div>
      </div>
      <div ref={mapRef} className="map" aria-label="Map showing St Idzi Zakliczyn" />
    </>
  );
};

export default StIdzi;
