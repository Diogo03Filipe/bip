import React, { useEffect, useRef } from 'react';
import './melsztyn.css'
import img from '../../assets/melsztyn.png';
import { useLanguage } from '../language'; // Adjust import path as needed

const Melsztyn = () => {

  const { language, translations } = useLanguage();

  const mapRef = useRef(null);

  useEffect(() => {
    // Check if HERE Maps SDK is loaded
    if (!window.H || !window.H.service) {
      console.error('❌ HERE Maps SDK not loaded. Check script imports in index.html.');
      return;
    }

    console.log('✅ HERE Maps SDK loaded successfully');

    try {
      const platform = new window.H.service.Platform({
        apikey: 'rJh1Srtc2cV8Eof2_8VvwWaYWg16d_toLCg6HHtqChI', // Replace with your actual API key
      });

      const defaultLayers = platform.createDefaultLayers();

      if (!mapRef.current) {
        console.error('❌ Map container not found.');
        return;
      }

      console.log('✅ Map container found:', mapRef.current);

      // Initialize the map
      const map = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: 49.849997, lng: 20.816663 },
        }
      );

      console.log('✅ Map initialized:', map);

      // Remove default UI controls
      const ui = window.H.ui.UI.createDefault(map, defaultLayers);
      ui.getControl('zoom').setVisibility(false); // Hide zoom control
      ui.getControl('mapsettings').setVisibility(false); // Hide map type control

      new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

      const marker = new window.H.map.Marker({ lat: 49.872923, lng: 20.766766 });
      map.addObject(marker);

      return () => map.dispose();
    } catch (error) {
      console.error('❌ Error initializing HERE Maps:', error);
    }
  }, []);

  return (
    <>
      <p className="text"> Melsztyn </p>
      <div className="city-center-container">

        {/* Full-width image section */}
        <div className="image-container">
          <img
            src={img}
            alt="Melsztyn city view"
            className="full-width-img"
          />
        </div>

        <div className='description'>
          {translations[language].melsztyn.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div ref={mapRef} className="map" aria-label="Map showing Melsztyn" />
    </>
  );
};

export default Melsztyn;