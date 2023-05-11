// import {BsFacebook} from 'react-icons/bs'
import { BsFacebook, BsPeopleFill } from "react-icons/bs";
// import {MdMessage} from 'react-icons/md'
import { MdMessage, MdOndemandVideo } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import {BiStore} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center fixed top-0 px-2 py-2 bg-white z-0">
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
          <MdMessage className="text-4xl p-2 rounded-3xl bg-gray-200 mr-2" />
          <IoNotifications className="text-4xl p-2 rounded-3xl bg-gray-200" />
        </div>
      </div>

      {/* Center tabs div */}
      <div className="flex justify-center items-center z-10 fixed top-0 w-full">
        <div className="h-12 w-20 flex justify-center items-end border-b-4 border-black">
          <AiFillHome className="text-3xl mb-1" />
        </div>
        <div className="h-12 w-20 flex justify-center items-end">
          <MdOndemandVideo className="text-3xl mb-1" />
        </div>
        <div className="h-12 w-20 flex justify-center items-end">
          <BiStore className="text-3xl mb-1" />
        </div>
        <div className="h-12 w-20 flex justify-center items-end">
          <BsPeopleFill className="text-3xl mb-1" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
