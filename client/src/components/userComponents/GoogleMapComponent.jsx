import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

const center = { lat: 48.8584, lng: 2.2945 };
const mirpur = { lat: 23.8223, lng: 90.3654 };
const farmgate = { lat: 23.7561, lng: 90.3872 };

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYS,
    libraries: ["places"], // Required for Autocomplete
  });

  const autocompleteRef = useRef(null);

  const handlePlaceSelected = () => {
    const place = autocompleteRef.current.getPlace();
    console.log("Selected Place:", place);
    // Access place details here, such as place.geometry.location or place.name
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
