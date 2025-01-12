import { useMapContext } from "@/context/MapContext";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState, memo } from "react";


const mirpurLocations = [
  {
    name: "Mirpur-10 Circle",
    latitude: 23.804675,
    longitude: 90.36665,
  },
  {
    name: "Mirpur DOHS",
    latitude: 23.810331,
    longitude: 90.367865,
  },
  {
    name: "Sher-e-Bangla National Cricket Stadium",
    latitude: 23.77806,
    longitude: 90.365478,
  },
  {
    name: "National Botanical Garden",
    latitude: 23.793225,
    longitude: 90.354287,
  },
  {
    name: "Dhaka Commerce College",
    latitude: 23.806786,
    longitude: 90.364528,
  },
  {
    name: "Mirpur Zoo (Bangladesh National Zoo)",
    latitude: 23.815136,
    longitude: 90.351095,
  },
  {
    name: "Mirpur-1",
    latitude: 23.799155,
    longitude: 90.345196,
  },
  {
    name: "Kafrul",
    latitude: 23.791611,
    longitude: 90.377743,
  },
  {
    name: "Pallabi",
    latitude: 23.822345,
    longitude: 90.366789,
  },
];

const MapView = memo(() => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const { directionsResponse } = useMapContext();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYS,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      center={currentLocation || { lat: 23.804675, lng: 90.36665 }} // Default to Mirpur-10 if no current location
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      onLoad={(map) => setMap(map)}
    >
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
      {currentLocation && <Marker position={currentLocation} />}
      {mirpurLocations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.latitude, lng: location.longitude }}
          title={location.name}
        />
      ))}
    </GoogleMap>
  );
});

export default MapView;
