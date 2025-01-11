import { createContext, useContext, useEffect, useState } from "react";

const MapContext = createContext(null);

const MapContextProvider = ({ children }) => {
  const [directionClicked, setDirectionClicked] = useState(false);



  const auth = {
    directionClicked,
    setDirectionClicked,
  };

  return <MapContext.Provider value={auth}>{children}</MapContext.Provider>;
};

const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error(
      "useAdminContext must be used within an AdminContextProvider"
    );
  }
  return context;
};

// Export the provider and hook
export { MapContextProvider, useMapContext };
