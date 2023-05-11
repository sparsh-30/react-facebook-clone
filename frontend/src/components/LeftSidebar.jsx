import {HiUserCircle} from 'react-icons/hi'
import {FaUserFriends} from 'react-icons/fa'
import {TiGroup} from 'react-icons/ti'
import {BiStore} from 'react-icons/bi'
import {MdOndemandVideo} from 'react-icons/md'
import {IoIosTimer} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'

const LeftSidebar = () => {
  return (
    <div className="w-2/4 h-full pt-8 pl-3 sticky top-[65px] left-0">
        <ul>
            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <HiUserCircle className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Username</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <FaUserFriends className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Friends</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <TiGroup className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Groups</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <BiStore className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Marketplace</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <MdOndemandVideo className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Watch</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <IoIosTimer className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Memories</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <FiLogOut className='text-3xl mr-3 text-blue-500' />
                <p className='text-lg font-bold'>Log Out</p>
            </li>
        </ul>
    </div>
  )
}

export default LeftSidebar