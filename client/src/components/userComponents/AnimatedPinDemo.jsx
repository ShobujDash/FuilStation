import { PinContainer } from "@/components/ui/3d-pin";
import FuilStation from "../../assets/public/fuilstation.jpeg";

import { FaChargingStation } from "react-icons/fa";
import { RiGasStationFill } from "react-icons/ri";





export function AnimatedPinDemo({ title, type }) {
  return (
    <div className="min:w-full flex items-center justify-center">
      <PinContainer title={title} href="/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 flex justify-between items-center">
            <h1
              className={`${
                type === "Fuil" ? "text-red-400" : "text-green-400"
              }`}
            >
              {title}
            </h1>
            <span>
              {type === "Fuil" ? (
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
          <img src={FuilStation} alt="fuil station" />
        </div>
      </PinContainer>
    </div>
  );
}
