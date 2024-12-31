import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";
import { FaLocationArrow, FaRegFlag } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";

import MapBottomBox from "./MapBottomBox";
const center = { lat: 48.8584, lng: 2.2945 };
const mirpur = { lat: 23.8223, lng: 90.3654 };
const farmgate = { lat: 23.7561, lng: 90.3872 };
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYSS,
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
    <div className="relative w-[100%] h-[90vh] sm:h-[98vh] rounded-lg">
      {/* Input Field Wrapper */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 bg-white p-1 rounded shadow-md flex items-center sm:px-2 sm:py-2">
        <div className="flex flex-row gap-2 ">
          {/* <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelected}
          >
            <input
              type="text"
              placeholder="Search for a location"
              className="w-[80px] sm:w-[100px] h-[40px] p-[10px] border border-gray-500 rounded-lg"
            />
          </Autocomplete> */}

          <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
            <FaLocationArrow className="text-blue-500 -mt-3" />
            <div>
              <h1 className="font-bold text-xs">Current Location</h1>
              <p className="font-light text-sm">Dhaka</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
            <FaRegFlag className="text-blue-500 -mt-3" />
            <div>
              <h1 className="font-bold text-xs">Destination</h1>
              <p className="font-light text-sm">Comilla</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
            <GiPathDistance className="text-blue-500 -mt-3" />
            <div>
              <h1 className="font-bold text-xs">Distance</h1>
              <p className="font-light text-sm">90km</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
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
        {/* <Marker position={mirpur} /> */}
        <Marker position={center} />
      </GoogleMap>

      {/* BOTTOM Field Wrapper */}
      <MapBottomBox />
    </div>
  );
};

export default Map;
