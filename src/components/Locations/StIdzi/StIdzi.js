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
      <p className="idzi-text"> St Idzi Zakliczyn </p>
      <div className="city-center-container">

        {/* Full-width image section */}
        <div className="image-container">
          <img
            src={img}
            alt="St Idzi Zakliczyn city"
            className="full-width-img"
          />
        </div>

        <div className='idzi-description'>
          {translations[language].StIdziZakliczyn.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div ref={mapRef} className="map" aria-label="Map showing St Idzi Zakliczyn" />
    </>
  );
};

export default StIdzi;
