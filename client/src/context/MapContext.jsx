import { createContext, useContext, useMemo, useState } from "react";
import { mirpurLocations } from "@/data";
// Create Context
const MapContext = createContext();

// Provider Component
export const MapProvider = ({ children }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [source,setSource] = useState("");
  const [destination,setDestination] = useState("");
  const [location, setLocation] = useState(mirpurLocations);

  const calculateRoute = async (origin, destination) => {
    if (!origin || !destination) return;

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin,
      destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setSource(results.request?.origin?.query);
    setDestination(results.request?.destination?.query);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setDestination("")
    setSource("")
  };

  // const memoizedContextValue = useMemo(
  //   () => ({
  //     directionsResponse,
  //     distance,
  //     duration,
  //     calculateRoute,
  //     clearRoute,
  //     location,
  //   }),
  //   [directionsResponse, distance, duration, location]
  // );

  const value = {
    directionsResponse,
    distance,
    duration,
    calculateRoute,
    clearRoute,
    location,
    source,
    destination
  };


  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
};

// Custom Hook
export const useMapContext = () => useContext(MapContext);
