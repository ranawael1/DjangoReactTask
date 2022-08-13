import React, {useState} from 'react'
import { GoogleMap, Marker, InfoWindow , useLoadScript} from '@react-google-maps/api';


function MapEgypt(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""
    })

    const containerStyle = {
        width: '100%',
        height: '50vh'
    };
  
    // Egypt coordinates
    const center = {
        lat: 26.8206,
        lng: 30.8025
    };
    let markers = props.markers

    // console.log(markers)
    //for testing markers
    // const markers = [
    //     {
    //         id: 1,
    //         position: { lat:30.02719365976025, lng:31.208633730934764 }
    //     },
    //     {
    //         id: 2,
    //         position: { lat: 28.1229, lng: 30.7347 }
    //         },
    
    //     ];
    
  // click on marker to show its name
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onClick={() => setActiveMarker(null)}

        >
        {markers &&
        <>
        {markers.map(({ id, name, lat, lng }) => (
          
        <Marker
        onClick={() => handleActiveMarker(id)}

          key={id}
          position={{ lat: lat, lng: lng }}
        >

          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
      </> }
      </GoogleMap>
    )
  :null}

export default MapEgypt