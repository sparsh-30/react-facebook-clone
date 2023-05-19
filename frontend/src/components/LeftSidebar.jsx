import Avatar from '@mui/material/Avatar'
import {FiLogOut} from 'react-icons/fi'

const LeftSidebar = () => {
  return (
    <div className="w-2/4 h-full pt-4 pl-3 sticky top-[65px] left-0">
        <ul>
            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <Avatar sx={{width:"35px",height:"35px",backgroundColor:"info.main"}} className='mr-3 text-blue-600'>S</Avatar>
                <p className='text-lg font-bold'>Sparsh</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt="groups" width="35px" height="35px" className="mr-3" />
                <p className='text-lg font-bold'>Friends</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt="groups" width="35px" height="35px" className="mr-3" />
                <p className='text-lg font-bold'>Groups</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" alt="groups" width="35px" height="35px" className="mr-3" />
                <p className='text-lg font-bold'>Marketplace</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" alt="groups" width="35px" height="35px" className="mr-3" />
                <p className='text-lg font-bold'>Watch</p>
            </li>

            <li className='flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" alt="groups" width="35px" height="35px" className="mr-3" />
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