import { GoogleMap, MarkerF, useLoadScript, CircleF, PolylineF } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import "./App.css";
import { route } from "./route";

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '', // add api key 
    libraries: ['drawing', 'geometry']
  });

  const [markerPosition, setMarkerPosition] = useState({ lat: 28.614587, lng: 77.389188 });

  const center = useMemo(() => ({ lat: 28.609787, lng: 77.390188 }), []);

  const circleOptions = {
    strokeColor: "yellow",
    strokeOpacity: 0.5,
    strokeWeight: 3.0,
    fillColor: "red",
    fillOpacity: 0.2,
    radius: 546, // radius in meters
  };

  useEffect(() => {
    if (isLoaded) {
      onPlaceSelectedHandler(markerPosition);
    }
  }, [isLoaded, markerPosition]);

  const onPlaceSelectedHandler = (place: typeof route[0]) => {
    if (window.google) {
      const center = new window.google.maps.LatLng(28.609687, 77.390188);
      const to = new window.google.maps.LatLng(place.lat, place.lng);
      
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(center, to);
      console.log('Distance from center:', distance, 'meters');
  
      if (distance <= 546) { // Adjust this radius as per your requirements
        console.log('Go ahead, how can we help you?');
      } else {
        console.log('Sorry, we do not offer our service yet.');
      }
    } else {
      console.error('Google Maps API is not loaded yet');
    }
  };
  if (loadError) return <h1>Error loading map</h1>;
  return (
    <div className="App">
    {!isLoaded ? (
      <h1>Loading...</h1>
    ) : (
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={15}
      >
        <PolylineF path={route} />
        <CircleF center={center} options={circleOptions} />
        {/* <MarkerF 
          position={markerPosition} 
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        /> */}
        {route.map((e, index) => (
          <MarkerF 
            key={index}
            position={{ lat: e.lat, lng: e.lng }} 
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          />
        ))}
      </GoogleMap>
    )}
  </div>
  );
}

export default App;
