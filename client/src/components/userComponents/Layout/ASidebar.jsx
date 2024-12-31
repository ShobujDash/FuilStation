import { BiLogOut } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { IoMdBatteryCharging, IoMdSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { PiChargingStationFill } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import FuilStation from "../../../../src/assets/public/fuilstation.jpeg";
import UserImage from "../../../../src/assets/public/UserImage.jpg";
import Logo from "../../../assets/public/FuilLogo.png";

const ASidebar = () => {
  const { isLoggedIn } = useAuthContext();

  const menuItems = [
    { label: "Home", path: "/", icon: <FaHome /> },
    // { label: "Dashboard", path: "/dashboard", icon: <MdSpaceDashboard /> },
    {
      label: "Charging Station",
      path: "/charge-station",
      icon: <PiChargingStationFill />,
    },
    { label: "Batter", path: "/battery", icon: <IoMdBatteryCharging /> },
    {
      label: "Recent View",
      path: "/recent-view",
      icon: <GrOverview />,
    },
    { label: "Settings", path: "/settings", icon: <IoMdSettings /> },
  ];

  return (
    <aside className="flex flex-col h-screen px-5 py-8 overflow-y-auto bg-blue-50 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 no-scrollbar">
      <Link to="/">
        <div className="flex items-center pb-4 border-b-2">
          <img className="w-12 h-10" src={Logo} alt="Logo" />
          <h1 className="text-lg font-bold text-[#DE2B08] ">FuilStation</h1>
        </div>
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3">
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

          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-500 text-white dark:bg-blue-700"
                    : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
                }`
              }
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-6">
          <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h2 className="text-sm font-medium text-gray-800 dark:text-white">
              New feature available!
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              harum officia eligendi velit.
            </p>
            <img
              className="object-cover w-full h-32 mt-2 rounded-lg"
              src={FuilStation}
              alt="Feature"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="flex items-center gap-x-2">
                  <img
                    className="object-cover rounded-full h-7 w-7"
                    src={UserImage}
                    alt="avatar"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    John Doe
                  </span>
                </Link>
                <Link
                  to="/login"
                  className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400  hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <BiLogOut />
                </Link>
              </>
            ) : (
              <Link to={"/login"} className="w-full">
                <Button className="w-full bg-blue-500 hover:bg-blue-800 hover:text-white transition-all duration-300">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ASidebar;
