import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_APIKEY as string
  })

  const center = { lat: 59.334591, lng: 18.063240 };
  const zoom = 10;

  return (
    <section className='map-section'>
      {isLoaded ? 
        <GoogleMap mapContainerStyle={{
          height: '325px',
          width: '100%',
          borderRadius: '10px'}} center={center} zoom={zoom}>
          <Marker position={center}/>
        </GoogleMap> : null}
    </section>
  );
};

export default Map;
