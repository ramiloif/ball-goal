'use client'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

import { useEffect } from 'react';

const containerStyle = {
    width: '800vh',
    height: '800px'
  };
  
  const center = {
    lat: 32.0853,
    lng: 34.7818
  };

  
  export default function MyMapComponent({ ballCords, setBallCords }) {
    
    const handleKeyUp = (event) => {
        console.log(`Key released: ${event.key}`);
        if (event.key === 'ArrowUp') {
            setBallCords({ lat: ballCords.lat + 0.1, lng: ballCords.lng });
        }
        if (event.key === 'ArrowDown') {
            setBallCords({ lat: ballCords.lat - 0.1, lng: ballCords.lng });
        }
        if (event.key === 'ArrowLeft') {
            setBallCords({ lat: ballCords.lat, lng: ballCords.lng - 0.1 });
        }
        if (event.key === 'ArrowRight') {
            setBallCords({ lat: ballCords.lat, lng: ballCords.lng + 0.1 });
        }
        // Add your logic here
    };  
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    });  

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCdtGPc2gg0Wh8UWRWDGDy8ChwLNyB5DnI"
      >
        <GoogleMap
        
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
            [
            <Marker position={ballCords} icon={{
                url: './ball.png',
            }} />]

        </GoogleMap>
      </LoadScript>
    )
  }