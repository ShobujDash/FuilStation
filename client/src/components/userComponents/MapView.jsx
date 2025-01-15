// import { useMapContext } from "@/context/MapContext";
// import {
//   DirectionsRenderer,
//   GoogleMap,
//   Marker,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { useEffect, useMemo, useState } from "react";

// const MapView = () => {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [map, setMap] = useState(null);
//   const { directionsResponse, mirpurLocations } = useMapContext();

//   // Memoize markers to avoid unnecessary re-renders
//   const memoizedMarkers = useMemo(() => mirpurLocations, [mirpurLocations]);
//   console.log(memoizedMarkers)

//   // Map options
//   const mapOptions = useMemo(
//     () => ({
//       zoomControl: false,
//       streetViewControl: false,
//       mapTypeControl: false,
//       fullscreenControl: false,
//     }),
//     []
//   );

//   // Static libraries array
//   const libraries = useMemo(() => ["places"], []);

//   // Fetch user's current location once the map is loaded
//   useEffect(() => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentLocation({ lat: latitude, lng: longitude });
//           },
//           (error) => {
//             console.error("Error fetching location: ", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     }
//   }, [map]);

//   // Load Google Maps API
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYS,
//     libraries,
//   });

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <GoogleMap
//       center={currentLocation || { lat: 23.804675, lng: 90.36665 }}
//       zoom={15}
//       mapContainerStyle={{ width: "100%", height: "100%" }}
//       options={mapOptions}
//       onLoad={(mapInstance) => setMap(mapInstance)}
//     >
//       {/* Directions Renderer */}
//       {directionsResponse && (
//         <DirectionsRenderer directions={directionsResponse} />
//       )}

//       {/* Marker for the user's current location */}
//       {currentLocation && <Marker position={currentLocation} />}

//       {/* Render all memoized markers */}
//       {memoizedMarkers.map((location, index) => (
//         <Marker
//           key={index}
//           position={{ lat: location.latitude, lng: location.longitude }}
//           title={location.name}
//         />
//       ))}
//     </GoogleMap>
//   );
// };

// export default MapView;

import { useMapContext } from "@/context/MapContext";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { memo, useEffect, useMemo, useState } from "react";

const MapView = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [newLocation,setNewLocation] = useState();
  const { directionsResponse, location } = useMapContext();


  const libraries = useMemo(() => ["places"], []);

  // Map options
  const mapOptions = useMemo(
    () => ({
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      clickableIcons:false,
    }),
    []
  );


  // Fetch user's current location once the map is loaded
  useEffect(() => {
    if (map) {
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
      setNewLocation(location)
    }
  }, [map]);

  

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYS,
    libraries,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      center={currentLocation || { lat: 23.804675, lng: 90.36665 }}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={mapOptions}
      onLoad={(mapInstance) => setMap(mapInstance)}
      // onLoad={onLoad}
    >
      {/* Directions Renderer */}
      {/* {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )} */}
      {directionsResponse ? (
        <DirectionsRenderer directions={directionsResponse} />
      ) : null}

      {/* Marker for the user's current location */}
      {currentLocation && (
        <Marker
          position={currentLocation}
          // icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIj5s8kuk3iIFuMkU482cdONS3dAQZDshy4A&s"
        />
      )}

      {/* Render all memoized markers */}
      {newLocation &&
        newLocation.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.latitude, lng: location.longitude }}
            title={location.name}
          />
        ))}
    </GoogleMap>
  );
};

export default MapView;
