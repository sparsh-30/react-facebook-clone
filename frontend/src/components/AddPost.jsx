import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const AddPost = () => {
  return (
    <div className="rounded-xl py-5 px-5 bg-white z-20">
        {/* Profile picture and write something input box */}
        <div className="flex items-center mt-1">
            <Avatar sx={{width:"40px",height:"40px",backgroundColor:"primary.dark"}} className='mr-2'>S</Avatar>
            <div className="w-full h-[35px] relative">
            <input
                type="text"
                placeholder={`What's in your mind, ${"Sparsh"} ?`}
                className="w-full h-full bg-gray-300 rounded-full px-4 py-2 font-semibold focus:outline-none"
            />
            </div>
            <div className='hover:bg-gray-200 hover:rounded-full hover:cursor-pointer ml-2 p-2'>
              <SendIcon sx={{width:"28px",height:"28px"}} />
            </div>
        </div>

        <div className='w-full h-[1px] my-4 bg-gray-300'></div>

        {/* AddPost Buttons */}
        <div className='grid grid-cols-3'>
          <div className='flex justify-center items-center py-1 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer'>
            <VideoCallIcon sx={{color:"error.light",height:"30px",width:"30px"}} />
            <p className='font-semibold ml-2'>Live Video</p>
          </div>
          <div className='flex justify-center items-center py-1 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer'>
            <PhotoLibraryIcon sx={{color:"success.light"}} />
            <p className='font-semibold ml-2'>Photo/Video</p>
          </div>
          <div className='flex justify-center items-center py-1 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer'>
            <EmojiEmotionsOutlinedIcon sx={{color:"warning.light"}} />
            <p className='font-semibold ml-2'>Feeling/Activity</p>
          </div>
        </div>

    </div>
  );
};

export default AddPost;
