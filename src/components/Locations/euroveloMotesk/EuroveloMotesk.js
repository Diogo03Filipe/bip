import React, { useEffect, useRef } from 'react';
import img from '../../../assets/EuroveloMostek.png';
import './EuroveloMotesk.css';
import { useLanguage } from '../../language';

const EuroveloMotesk = () => {
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
      <p className="eurovelo-text">Eurovelo Mostek</p>
      <div className="city-center-container">
        <div className="image-container">
          <img
            src={img}
            alt="Eurovelo Mostek city"
            className="full-width-img"
          />
        </div>
        <div className="eurovelo-description">
          {translations[language].EuroveloMostek.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div ref={mapRef} className="map" aria-label="Map showing the Eurovelo Mostek" />
    </>
  );
};

export default EuroveloMotesk;