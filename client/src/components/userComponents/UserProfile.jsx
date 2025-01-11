import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdKeyboardArrowRight,
  MdOutlineFileDownload,
  MdOutlineWorkHistory,
} from "react-icons/md";


import { RiArrowLeftSLine, RiDeleteBin6Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import UserProfile from "../../assets/public/UserImage.jpg";
import { EditProfile } from "./Profile/EditProfile";

const UserProfilePage = () => {
  const [showEditPopover, setShowEditPopover] = useState(false);

  const toggleEditPopover = () => {
    setShowEditPopover(!showEditPopover);
  };

  return (
    <div className="min-h-screen bg-cyan-50 py-1 px-1  relative">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
        <div className="flex flex-row justify-between items-center mb-2">
          <Link to="/">
            <RiArrowLeftSLine className="font-bold text-2xl m-2 cursor-pointer" />
          </Link>
          <h1 className="text-lg sm:text-xl font-semibold">My Profile</h1>
          <IoMdSettings className="font-bold text-lg m-2 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={UserProfile}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">Sabrina Aryan</h2>
            <p className="text-sm text-gray-600">SabrinaAry208@gmail.com</p>
            <button
              onClick={toggleEditPopover}
              className="mt-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Menu Options */}
        <ul className="mt-6 space-y-4">
          <li className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <FaRegHeart className="font-bold text-xl " />
              </span>
              Favourites
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <li className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <MdOutlineFileDownload className="font-bold text-xl " />
              </span>
              Downloads
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <hr className="border-1 border-gray-400" />
          <li className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <TbWorld className="font-bold text-xl " />
              </span>
              Languages
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <li className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <IoLocationOutline className="font-bold text-xl " />
              </span>
              Location
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <li className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <FaDisplay className="font-bold text-xl" />
              </span>
              Subscription
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <li className="flex items-center justify-between space-x-3">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <MdOutlineWorkHistory className="font-bold text-xl " />
              </span>
              Display
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <hr className="border-1 border-gray-400" />
        </ul>

        {/* Clear Options */}
        <ul className="mt-6 space-y-4">
          <li className="text-gray-700 font-semibold flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <RiDeleteBin6Line className="font-bold text-xl" />
              </span>
              Clear Cache
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <li className="text-gray-700 font-semibold flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer">
              <span>
                <MdOutlineWorkHistory className="font-bold text-xl " />
              </span>
              Clear History
            </div>

            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
          <li className="text-gray-700 font-semibold flex items-center justify-between">
            <Link to="/">
              <div className="flex items-center gap-4">
                <span>
                  <BiLogOut className="font-bold text-xl cursor-pointer" />
                </span>
                Log Out
              </div>
            </Link>
            <span>
              <MdKeyboardArrowRight className="cursor-pointer" />
            </span>
          </li>
        </ul>
        <hr className="border-1 border-gray-400 mt-2" />
        <p className="text-xs text-gray-500 text-center mt-4">
          App Version 1.0
        </p>
      </div>

      {showEditPopover && <EditProfilePopover onClose={toggleEditPopover} />}
    </div>
  );
};

const EditProfilePopover = ({ onClose }) => {
  return (
    <div className="absolute top-0 left-0 inset-0 bg-black bg-opacity-30 flex items-center justify-center">
    
      <EditProfile onClose={onClose} />
    </div>
  );
};

export default UserProfilePage;
