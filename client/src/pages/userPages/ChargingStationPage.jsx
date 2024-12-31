import MasterLayout from "@/components/userComponents/Layout/MastarLayout";
import { IoSearchSharp } from "react-icons/io5";
import { TbFilter } from "react-icons/tb";
import chargingStation01 from "../../assets/public/chargingStation01.jpeg"
import chargingStation02 from "../../assets/public/chargingStation02.jpeg"
import chargingStation03 from "../../assets/public/chargingStation03.jpeg"
import fuilStation01 from "../../assets/public/fuilStation01.jpg"
import fuilStation02 from "../../assets/public/fuilStation02.jpeg";

const station = [
  {
    _id: 1,
    station: "fuil",
    image: fuilStation01,
    title: "Banani Fuil Station",
  },
  {
    _id: 2,
    station: "charge",
    image: chargingStation01,
    title: "Farmgate Charging Station",
  },
  {
    _id: 3,
    station: "charge",
    image: chargingStation02,
    title: "Dhaka University Charging Staiton",
  },
  {
    _id: 4,
    station: "fuil",
    image: fuilStation02,
    title: "Mohakhali Fuil Staion",
  },
  {
    _id: 5,
    station: "charge",
    image: chargingStation03,
    title: "Badda Charging Station",
  },
];

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AnimatedPinDemo } from "@/components/userComponents/AnimatedPinDemo";
import { PinContainer } from "@/components/ui/3d-pin";
import { RiGasStationFill } from "react-icons/ri";
import { FaChargingStation } from "react-icons/fa";

const ChargingStationPage = () => {
  return (
    <MasterLayout>
      <div className="bg-cyan-50 sm:pl-4">
        <h1 className="text-md sm:text-lg md:text-xl font-semibold my-3  text-cyan-900">
          All Charging Station
        </h1>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="relative ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearchSharp className="text-gray-600 text-lg" />
            </span>
            <input
              type="text"
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
          <Popover>
            <PopoverTrigger className="w-1/6 bg-white items-center text-center px-2 py-2 rounded-lg">
              <TbFilter className="text-gray-600 text-lg" />
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <ul className="">
                <li className="bg-gray-200 rounded-md text-sm font-bold px-2 py-2 mb-2 cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">
                  Fuil Station
                </li>
                <li className="bg-gray-200 rounded-md text-sm font-bold px-2 py-2 cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">
                  Charging Station
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-10 overflow-y-scroll h-96 sm:h-[80vh] w-full no-scrollbar">
          {station.map((item) => (
            <div
              key={item?._id}
              className="min:w-full flex items-center justify-center"
            >
              <PinContainer title={item?.title} href="/">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 flex justify-between items-center">
                    <h1
                      className={`${
                        item?.station === "fuil"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {item?.title}
                    </h1>
                    <span>
                      {item?.station === "fuil" ? (
                        <p className="px-2 py-0.5 bg-red-400 rounded-full text-white flex flex-row gap-1 items-center">
                          <RiGasStationFill />
                          <span>Fuil</span>
                        </p>
                      ) : (
                        <p className="px-2 py-0.5 bg-green-400 rounded-full text-white flex flex-row gap-1 items-center">
                          <FaChargingStation />
                          <span>Eleictric</span>
                        </p>
                      )}
                    </span>
                  </h3>

                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  <img src={item?.image} alt="fuil station" />
                </div>
              </PinContainer>
            </div>
          ))}
          {/* <AnimatedPinDemo title="Banani Fuil Station" type="Fuil" />
          <AnimatedPinDemo title="FarmGate Fuil Station" type="Fuil" />
          <AnimatedPinDemo title="Mohakhali Charging Station" type="Charging" />
          <AnimatedPinDemo
            title="Bashundhara Charging Station"
            type="Charging"
          />
          <AnimatedPinDemo title="KawranBarar Fuil Station" type="Fuil" />
          <AnimatedPinDemo title="ShahBag Charging Station" type="Charging" /> */}
        </div>
      </div>
    </MasterLayout>
  );
};

export default ChargingStationPage;
