import { createContext, useContext, useState } from "react";

// Create Context
const MapContext = createContext();

// Provider Component
export const MapProvider = ({ children }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

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
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
  };

  return (
    <MapContext.Provider
      value={{
        directionsResponse,
        distance,
        duration,
        calculateRoute,
        clearRoute,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

// Custom Hook
export const useMapContext = () => useContext(MapContext);
