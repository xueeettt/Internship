import React, { useEffect, useRef } from 'react';
import ContactBoard from '../../components/contactBoard';

import './style.less';

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const center = { lat: -37.80650329589844, lng: 144.97454833984375 };
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 14,
        center: center,
        mapId: 'MAP'
      });

      new window.google.maps.Marker({
        position: center,
        map: map,
        title: 'Location'
      });
    };
    // Assign initMap to window object to ensure it's callable globally
    window.initMap = initMap;

    // Check if the Google Maps script is already loaded by checking for the google maps object
    if (window.google && window.google.maps) {
      // If google maps is already loaded, directly initialize the map
      initMap();
    } else {
      // If not loaded, proceed to load the script
      const scriptId = 'google-maps-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCFII-OjBUDXZPr9TX4x4yZ-XXJ0rgtxms&callback=initMap&libraries=maps,marker&v=beta&language=en`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      // Clean up
      if (window.initMap) {
        window.initMap = undefined;
      }
    };
  }, []);

  return (
    <div className="container">
      <div ref={mapRef} style={{ height: '200px', width: '100%' }}></div>
      <div className='contactBoard'>
        <ContactBoard/>
      </div>
      
    </div>
  );
};

export default Contact;
