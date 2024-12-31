import MasterLayout from "@/components/userComponents/Layout/MastarLayout";
import { FaChargingStation } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { RiGasStationFill } from "react-icons/ri";
import { TbFilter } from "react-icons/tb";



const RecentViewPage = () => {
  return (
    <MasterLayout>
      <div className="bg-cyan-50 sm:pl-4">
        <h1 className="text-md sm:text-lg md:text-xl font-semibold my-3  text-cyan-900">
          You Recent Viewed Some Location
        </h1>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearchSharp className="text-gray-600 text-lg" />
            </span>
            <input
              type="text"
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
        </div>


        <div className="flex flex-col gap-3 overflow-y-scroll h-96 sm:h-[80vh] no-scrollbar">
          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Banani Charging Station
              </h1>
              <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                <FaChargingStation />
                <span>Eleictric</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>

          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Uttora Fuil Station
              </h1>
              <p className="px-2 py-0.5 bg-red-400 rounded-full text-white flex flex-row gap-1 items-center">
                <RiGasStationFill />
                <span>Fuil</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>

          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Farmgate Charging Station
              </h1>
              <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                <FaChargingStation />
                <span>Eleictric</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>
          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Farmgate Charging Station
              </h1>
              <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                <FaChargingStation />
                <span>Eleictric</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>
          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Farmgate Charging Station
              </h1>
              <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                <FaChargingStation />
                <span>Eleictric</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>
          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Farmgate Charging Station
              </h1>
              <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                <FaChargingStation />
                <span>Eleictric</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>
          <div className="shadow-md p-2 rounded-lg border bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-sm sm:text-md font-bold">
                Farmgate Charging Station
              </h1>
              <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                <FaChargingStation />
                <span>Eleictric</span>
              </p>
            </div>
            <div className="pt-2">
              <h1>
                <span className="text-sm text-gray-400">My Locaton</span> :
                Laksam
              </h1>
              <h1>
                <span className="text-sm text-gray-400">My Destication </span>:
                Banani Fuil Station
              </h1>
              <h1 className="flex gap-1 sm:gap-2 items-center">
                <span className="text-sm text-gray-400">Distance</span> :{" "}
                <GiPathDistance className="text-green-700 font-black" /> 100km
              </h1>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default RecentViewPage;
