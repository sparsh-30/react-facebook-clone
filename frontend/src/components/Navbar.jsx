import { useState } from "react";
import { BsFacebook, BsPeopleFill } from "react-icons/bs";
import { MdMessage, MdOndemandVideo } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { BiStore } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [iconIndex, setIconIndex] = useState(0);

  return (
    <div>
      <div className="w-full flex justify-between items-center fixed top-0 px-2 py-2 bg-white z-10">
        {/* Logo and search bar div */}
        <div className="flex justify-center items-center">
          <BsFacebook className="text-5xl text-blue-700" />
          <div className="relative">
            <BiSearch className="absolute text-xl left-8 top-3 font-bold z-10" />
            <input
              type="text"
              className="w-60 rounded-3xl h-10 pl-12 bg-gray-200 ml-2 focus:outline-none z-0"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Side notifications and message div */}
        <div className="flex justify-center items-center mr-5">
          <MdMessage className="text-4xl p-2 rounded-3xl bg-gray-200 mr-2 hover:cursor-pointer" />
          <IoNotifications className="text-4xl p-2 rounded-3xl bg-gray-200 hover:cursor-pointer" />
        </div>
      </div>

      {/* Center tabs div */}
      <div className="flex justify-center items-center z-20 fixed top-0 w-full">
        <div
          onClick={() => setIconIndex(0)}
          className={`h-12 w-20 flex justify-center items-end transition-all duration-150 ease-in-out ${
            iconIndex === 0 ? "border-b-4 border-blue-700 text-blue-700" : ""
          } hover:cursor-pointer`}
        >
          <AiFillHome className="text-2xl mb-1" />
        </div>
        <div
          onClick={() => setIconIndex(1)}
          className={`h-12 w-20 flex justify-center items-end transition-all duration-150 ease-in-out ${
            iconIndex === 1 ? "border-b-4 border-blue-700 text-blue-700" : ""
          } hover:cursor-pointer`}
        >
          <MdOndemandVideo className="text-2xl mb-1" />
        </div>
        <div
          onClick={() => setIconIndex(2)}
          className={`h-12 w-20 flex justify-center items-end transition-all duration-150 ease-in-out ${
            iconIndex === 2 ? "border-b-4 border-blue-700 text-blue-700" : ""
          } hover:cursor-pointer`}
        >
          <BiStore className="text-2xl mb-1" />
        </div>
        <div
          onClick={() => setIconIndex(3)}
          className={`h-12 w-20 flex justify-center items-end transition-all duration-150 ease-in-out ${
            iconIndex === 3 ? "border-b-4 border-blue-700 text-blue-700" : ""
          } hover:cursor-pointer`}
        >
          <BsPeopleFill className="text-2xl mb-1" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
