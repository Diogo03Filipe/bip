import React, { useEffect, useRef } from 'react';
import img from '../../../assets/zakliczyn.png';
import './cityCenter.css';
import { useLanguage } from '../../language'; // Adjust import path as needed

const CityCenter = () => {

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
        center: { lat: 49.856252, lng: 20.808794 },
      }
    );

    const ui = window.H.ui.UI.createDefault(map, defaultLayers);
    ui.getControl('zoom').setVisibility(false);
    ui.getControl('mapsettings').setVisibility(false);

    new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
    const marker = new window.H.map.Marker({ lat: 49.872923, lng: 20.766766 });
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
      <p className="zakliczyn-title2">{translations[language].zakliczyn.title}</p>
      <div className="city-center-container">

        {/* Full-width image section */}
        <div className="image-container">
          <img
            src={img}
            alt="Zakliczyn city view"
            className="full-width-img"
          />
        </div>

        <div className='zakliczyn-rect'>
          <div className='zakliczyn-description'>{translations[language].zakliczyn.description}</div>
          <div className='zakliczyn-title'>{translations[language].zakliczyn.title2}</div>
          <div className='zakliczyn-description'>{translations[language].zakliczyn.text}</div>
          <div className='zakliczyn-description'>{translations[language].zakliczyn.text2}</div>
          <div className='zakliczyn-title'>{translations[language].zakliczyn.title3}</div>
          <div className='zakliczyn-description'>{translations[language].zakliczyn.text3}</div>
          <div className='zakliczyn-description'>{translations[language].zakliczyn.text4}</div>
        </div>


      </div>
      <div ref={mapRef} className="map" aria-label="Map showing Zakliczyn" />
    </>
  );
};

export default CityCenter;