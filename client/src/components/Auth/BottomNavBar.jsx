import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";
import { PiVideo } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { MdEvStation } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";




import { Link, useNavigate, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const [active, setActive] = useState(2);
  const location = useLocation(); // Tracks the current route
  // console.log(active)

  // console.log(location.pathname)

  const Menus = [
    { name: "Home", icon: <IoHomeOutline />, route: "/", dis: "translate-x-0" },
    {
      name: "Station",
      icon: <MdEvStation />,
      route: "/charge-station",
      dis: "translate-x-16",
    },
    {
      name: "Location",
      icon: <FaMapMarkerAlt />,
      route: "/",
      dis: "translate-x-32",
    },
    {
      name: "Gallery",
      icon: <TfiGallery />,
      route: "/reels",
      dis: "translate-x-48",
    },
    {
      name: "Account",
      icon: <MdAccountCircle />,
      route: "/settings",
      dis: "translate-x-64",
    },
  ];

  useEffect(() => {
    // Update active index based on the current route
    const currentMenuIndex = Menus.findIndex(
      (menu) => menu.route === location.pathname
    );
    if (currentMenuIndex !== -1) {
      setActive(currentMenuIndex);
    }
  }, [location.pathname]);

  return (
    <div className="sm:hidden fixed bottom-0 bg-gray-900">
      <div className="dark:bg-dark_dark bg-white text-black max-h-[5rem] px-6 rounded-t-xl">
        <ul className="flex relative">
          <span
            className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
            -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px]
              rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px]
              rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <div key={i} className="w-16">
              <Link
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
                to={menu.route}
              >
                <span
                  className={`text-black dark:text-white text-2xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-white z-10"
                  }`}
                >
                  <div className="ml-5">{menu.icon}</div>
                </span>
                <span
                  className={`text-black dark:text-white ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {menu.name}
                </span>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomNavbar;
