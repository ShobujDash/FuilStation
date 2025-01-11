import { useRef } from "react";
import { FaLocationArrow, FaRegFlag } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlineDirections } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMapContext } from "@/context/MapContext";
import { Autocomplete } from "@react-google-maps/api";
import { Button } from "../ui/button";

const MapHeader = ({ location, destination,  }) => {
 const { calculateRoute, clearRoute, distance } = useMapContext();

  return (
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 bg-white p-1 rounded shadow-md flex items-center sm:px-2 sm:py-2">
      <div className="flex flex-row gap-2">
        {/* <InfoBox
          icon={<FaLocationArrow />}
          title="Current Location"
          value={location}
        />
        <InfoBox icon={<FaRegFlag />} title="Destination" value={destination} />
        <InfoBox icon={<GiPathDistance />} title="Distance" value={distance} /> */}
        <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
          <div className="text-blue-500 -mt-3">
            <FaLocationArrow />
          </div>
          <div>
            <h1 className="font-bold text-xs">Current Location</h1>
            <p className="font-light text-sm">{location}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
          <div className="text-blue-500 -mt-3">
            <FaRegFlag />
          </div>
          <div>
            <h1 className="font-bold text-xs">Destination</h1>
            <p className="font-light text-sm">{destination}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 min-w-20 sm:min-w-32">
          <div className="text-blue-500 -mt-3">
            <GiPathDistance />
          </div>
          <div>
            <h1 className="font-bold text-xs">Distance</h1>
            <p className="font-light text-sm">{distance ? distance : "0 km"}</p>
          </div>
        </div>
        <DirectionsSheet />
      </div>
    </div>
  );
} 

export default MapHeader;


const DirectionsSheet = () => {
  const { calculateRoute, clearRoute, distance } = useMapContext();
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const handleCalculateRoute = () => {
    const origin = originRef.current.value.trim();
    const destination = destinationRef.current.value.trim();

    if (origin && destination) {
      calculateRoute(origin, destination);
      console.log(calculateRoute(origin, destination));
    } else {
      alert("Please provide both origin and destination.");
    }
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
              <Autocomplete>
                <input
                  type="text"
                  placeholder={`Search for a source`}
                  className="w-full h-[40px] p-[10px] border border-gray-500 rounded-lg"
                  ref={originRef}
                />
              </Autocomplete>
              <Autocomplete>
                <input
                  type="text"
                  placeholder={`Search for a destinaiton`}
                  className="w-full h-[40px] p-[10px] border border-gray-500 rounded-lg"
                  ref={destinationRef}
                />
              </Autocomplete>
              <SheetClose asChild>
                <Button
                  onClick={handleCalculateRoute}
                  className="w-full bg-green-500 hover:bg-green-800"
                >
                  Search
                </Button>
              </SheetClose>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
