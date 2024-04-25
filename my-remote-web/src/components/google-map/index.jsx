import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ apiKey }) => {
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

        window.initMap = initMap;

        if (window.google && window.google.maps) {
            initMap();
        } else {
            const scriptId = 'google-maps-script';
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=maps,marker&v=beta&language=en`;
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
            }
        }

        return () => {
            window.initMap = undefined;
        };
    }, [apiKey]);

    return <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
};

export default GoogleMap;