// import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { useRef } from "react";
// import { FaLocationArrow, FaRegFlag } from "react-icons/fa";
// import { MdOutlineDirections } from "react-icons/md";

// import { GiPathDistance } from "react-icons/gi";
// import MapBottomBox from "./MapBottomBox";
// import { Button } from "../ui/button";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";


// const center = { lat: 48.8584, lng: 2.2945 };
// const mirpur = { lat: 23.8223, lng: 90.3654 };
// const farmgate = { lat: 23.7561, lng: 90.3872 };

// const Map = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYS,
//     libraries: ["places"], // Required for Autocomplete
//   });

//   const autocompleteRef = useRef(null);

//   const handlePlaceSelected = () => {
//     const place = autocompleteRef.current.getPlace();
//     console.log("Selected Place:", place);
//     // Access place details here, such as place.geometry.location or place.name
//   };

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative w-[100%] h-[calc(100vh-50px)] sm:h-[100vh] rounded-lg">
//       {/* Input Field Wrapper */}
//       <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 bg-white p-1 rounded shadow-md flex items-center sm:px-2 sm:py-2">
//         <div className="flex flex-row gap-2 ">
//           {/* */}

//           <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
//             <FaLocationArrow className="text-blue-500 -mt-3" />
//             <div>
//               <h1 className="font-bold text-xs">Current Location</h1>
//               <p className="font-light text-sm">Dhaka</p>
//             </div>
//           </div>
//           <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
//             <FaRegFlag className="text-blue-500 -mt-3" />
//             <div>
//               <h1 className="font-bold text-xs">Destination</h1>
//               <p className="font-light text-sm">Comilla</p>
//             </div>
//           </div>
//           <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
//             <GiPathDistance className="text-blue-500 -mt-3" />
//             <div>
//               <h1 className="font-bold text-xs">Distance</h1>
//               <p className="font-light text-sm">90km</p>
//             </div>
//           </div>
//           <div className="flex flex-row items-center justify-center gap-1 ">
//             <Sheet>
//               <SheetTrigger>
//                 <Button className="bg-blue-600  ">
//                   <MdOutlineDirections className="text-white text-7xl" />
//                 </Button>
//                 {/*  */}
//               </SheetTrigger>
//               <SheetContent>
//                 <SheetHeader>
//                   <SheetTitle className="text-green-500">Search Your Destination?</SheetTitle>
//                   <SheetDescription>
//                     <div className="flex flex-col  gap-2">
//                       <div>
//                         <p>Source</p>
//                         <Autocomplete
//                           onLoad={(autocomplete) =>
//                             (autocompleteRef.current = autocomplete)
//                           }
//                           onPlaceChanged={handlePlaceSelected}
//                         >
//                           <input
//                             type="text"
//                             placeholder="Search for a location"
//                             className="w-full h-[40px] p-[10px] border border-gray-500 rounded-lg"
//                           />
//                         </Autocomplete>
//                       </div>
//                       <div>
//                         <p>Destination</p>
//                         <Autocomplete
//                           onLoad={(autocomplete) =>
//                             (autocompleteRef.current = autocomplete)
//                           }
//                           onPlaceChanged={handlePlaceSelected}
//                         >
//                           <input
//                             type="text"
//                             placeholder="Search for a location"
//                             className="w-full h-[40px] p-[10px] border border-gray-500 rounded-lg"
//                           />
//                         </Autocomplete>
//                       </div>
//                       <div>
//                         <Button className="w-full bg-green-500 hover:bg-green-800">Search</Button>
//                       </div>
//                     </div>
//                   </SheetDescription>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>

//       {/* Google Map */}
//       <GoogleMap
//         center={center}
//         zoom={15}
//         mapContainerStyle={{ width: "100%", height: "100%" }}
//         options={{
//           zoomControl: false,
//           streetViewControl: false,
//           mapTypeControl: false,
//           fullscreenControl: false,
//         }}
//       >
//         <Marker position={center} />
      
//       </GoogleMap>

//       {/* BOTTOM Field Wrapper */}
//       <div className="absolute  left-1/2 transform -translate-x-1/2 z-10  p-2  flex items-center w-[90%] sm:w-[90%] max-h-[150px]">
//         <MapBottomBox />
//       </div>
//     </div>
//   );
// };

// export default Map;




import {
  Autocomplete,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useRef } from "react";
import { FaLocationArrow, FaRegFlag } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

import MapBottomBox from "./MapBottomBox";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const center = { lat: 48.8584, lng: 2.2945 };

const MapHeader = ({ location, destination, distance }) => (
  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 bg-white p-1 rounded shadow-md flex items-center sm:px-2 sm:py-2">
    <div className="flex flex-row gap-2">
      <InfoBox
        icon={<FaLocationArrow />}
        title="Current Location"
        value={location}
      />
      <InfoBox icon={<FaRegFlag />} title="Destination" value={destination} />
      <InfoBox icon={<GiPathDistance />} title="Distance" value={distance} />
      <DirectionsSheet />
    </div>
  </div>
);

const InfoBox = ({ icon, title, value }) => (
  <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
    <div className="text-blue-500 -mt-3">{icon}</div>
    <div>
      <h1 className="font-bold text-xs">{title}</h1>
      <p className="font-light text-sm">{value}</p>
    </div>
  </div>
);

const DirectionsSheet = () => {
  const autocompleteRef = useRef(null);

  const handlePlaceSelected = () => {
    const place = autocompleteRef.current.getPlace();
    console.log("Selected Place:", place);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="bg-blue-600">
          <MdOutlineDirections className="text-white text-7xl" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-green-500">
            Search Your Destination
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-2">
              <LocationInput
                label="Source"
                onPlaceSelected={handlePlaceSelected}
                autocompleteRef={autocompleteRef}
              />
              <LocationInput
                label="Destination"
                onPlaceSelected={handlePlaceSelected}
                autocompleteRef={autocompleteRef}
              />
              <Button className="w-full bg-green-500 hover:bg-green-800">
                Search
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const LocationInput = ({ label, onPlaceSelected, autocompleteRef }) => (
  <div>
    <p>{label}</p>
    <Autocomplete
      onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
      onPlaceChanged={onPlaceSelected}
    >
      <input
        type="text"
        placeholder={`Search for a ${label.toLowerCase()}`}
        className="w-full h-[40px] p-[10px] border border-gray-500 rounded-lg"
      />
    </Autocomplete>
  </div>
);

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOGOLE_MAPS_API_KEYS,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-[calc(100vh-50px)] sm:h-[100vh] rounded-lg">
      <MapHeader location="Dhaka" destination="Comilla" distance="90km" />
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
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 p-2 flex items-center w-[90%] sm:w-[90%] max-h-[150px]">
        <MapBottomBox />
      </div>
    </div>
  );
};

export default Map;

