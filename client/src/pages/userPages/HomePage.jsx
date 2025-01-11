import MasterLayout from "@/components/userComponents/Layout/MastarLayout";
import  WorldMapDemo  from "@/components/userComponents/WroldMap";
import { FaChargingStation } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { IoMdBatteryCharging } from "react-icons/io";
import { RiGasStationFill } from "react-icons/ri";

const HomePage = () => {
  return (
    <MasterLayout>
      <div className="bg-cyan-50 h-full">
        <h1 className=" text-center py-5 text-md lg:text-xl font-bold ">
          Welcome To <span className="text-[#DE2B5F]">Our Webstie</span>
        </h1>

        <div className="flex flex-col gap-3 overflow-y-scroll h-96 sm:h-[90vh] no-scrollbar">
          <div className="my-2 w-full">
            {/* <WorldMapDemo /> */}
          </div>

          <div className="p-2 flex flex-row gap-3 items-center">
            <div className="p-4 flex gap-2 bg-white shadow-xl rounded-lg">
              <div className="bg-red-200 p-6 text-red-900 text-xl rounded-lg ">
                <span>
                  <RiGasStationFill />
                </span>
              </div>
              <div>
                <span className="text-lg font-bold ">5</span>
                <h1 className="text-red-400 font-semibold">Fuil Station</h1>
              </div>
            </div>
            <div className="p-4 flex gap-2 bg-white shadow-xl rounded-lg">
              <div className="bg-green-200 p-6 text-green-900 text-xl rounded-lg">
                <span>
                  <FaChargingStation />
                </span>
              </div>
              <div>
                <span className="text-lg font-bold ">5</span>
                <h1 className="text-green-400 font-semibold">
                  Charging Station
                </h1>
              </div>
            </div>
          </div>

          <div className="p-2 flex flex-row flex-wrap gap-3 items-center">
            <div className="p-4 flex gap-2 bg-white shadow-xl rounded-lg">
              <div className="bg-yellow-100 p-6 text-yellow-900 text-xl rounded-lg ">
                <span>
                  <IoMdBatteryCharging />
                </span>
              </div>
              <div>
                <span className="text-lg font-bold ">95%</span>
                <h1 className="text-yellow-400 font-semibold">
                  Battery <br /> Percentage
                </h1>
              </div>
            </div>
            <div className="p-4 flex gap-2 bg-white shadow-xl rounded-lg">
              <div className="bg-green-200 p-6 text-green-900 text-xl rounded-lg">
                <span>
                  <GiPathDistance />
                </span>
              </div>
              <div>
                <span className="text-lg font-bold ">5 km</span>
                <h1 className="text-green-400 font-semibold">Total Distance</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default HomePage;
