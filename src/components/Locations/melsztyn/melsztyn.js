import React, { useEffect, useRef } from 'react';
import './melsztyn.css'
import img from '../../../assets/melsztyn.png';
import { useLanguage } from '../../language'; // Adjust import path as needed

const Melsztyn = () => {

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
      <p className="melsztyn-title2">{translations[language].melsztyn.title}</p>
      <div className="city-center-container">

        {/* Full-width image section */}
        <div className="image-container">
          <img
            src={img}
            alt="Melsztyn city view"
            className="full-width-img"
          />
        </div>

        <div className='melsztyn-rect'>
          <div className='melsztyn-description'>{translations[language].melsztyn.description}</div>
          <div className='melsztyn-title'>{translations[language].melsztyn.title2}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text2}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text3}</div>
          <div className='melsztyn-title'>{translations[language].melsztyn.title3}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text4}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text5}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text6}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text7}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text8}</div>
          <div className='melsztyn-title'>{translations[language].melsztyn.title4}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text9}</div>
          <div className='melsztyn-description'>{translations[language].melsztyn.text10}</div>
        </div>
      </div>
      <div ref={mapRef} className="map" aria-label="Map showing Melsztyn" />
    </>
  );
};

export default Melsztyn;