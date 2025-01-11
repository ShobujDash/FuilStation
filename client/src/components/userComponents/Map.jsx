import MapBottomBox from "./MapBottomBox";
import MapHeader from "./MapHeader";
import MapView from "./MapView";



const Map = () => {
  return (
    <div className="relative w-full h-[calc(100vh-50px)] sm:h-[100vh] rounded-lg">
      {/* Header Component */}
      <MapHeader location="Dhaka" destination="Comilla" distance="90km" />

      {/* MapView Component */}
      <MapView />

      {/* Bottom Component */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 p-2 flex items-center w-[90%] sm:w-[90%] max-h-[150px]">
        <MapBottomBox />
      </div>
    </div>
  );
};

export default Map;
