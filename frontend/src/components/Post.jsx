import {HiUserCircle} from 'react-icons/hi'
import {BsThreeDots} from 'react-icons/bs'
import {AiTwotoneLike} from 'react-icons/ai'
import {AiOutlineLike} from 'react-icons/ai'
import {FaComment,FaRegComment} from 'react-icons/fa'

import post_image from './../../../facebook.png'

const PostHeader = () => {
  return (
    <div className='mb-4 flex justify-between items-center'>
      {/* User details div */}
      <div className='flex justify-center items-center w-fit'>
        <HiUserCircle className='text-4xl text-gray-600 mr-2' />
        <p className='font-semibold'>UserName</p>
      </div>

      {/* Menu button */}
      <div className='cursor-pointer hover:bg-gray-300 p-1 rounded-full'>
        <BsThreeDots className='text-2xl' />
      </div>
    </div>
  )
}

const PostBody = () => {
  return (
    <div>
      {/* Post captions */}
      <p className='text-gray-700 font-semibold'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quis nostrum optio voluptate ea, magnam minima, atque necessitatibus beatae magni iusto. Officia corporis, ipsam debitis dignissimos pariatur quis esse aliquam atque ut, ipsum veniam magnam numquam voluptatem suscipit omnis consequatur laboriosam ab odio repellendus eos consequuntur doloribus. Rem ea expedita debitis cum aspernatur architecto consequuntur sed impedit dignissimos, veniam quam eos eum voluptates, quis eaque at laboriosam laborum veritatis neque fugit. Tempore pariatur, ipsa consequatur commodi quas distinctio voluptas enim dignissimos libero laboriosam suscipit quo? Incidunt unde ratione obcaecati, vel neque harum dignissimos quam minima, amet facere necessitatibus, cum aspernatur?
      </p>

      {/* Post image */}
      <img src={post_image} className='w-full h-[400px] my-2' alt="Post Image" />
    </div>
  )
}

const PostFooter = () => {
  return (
    <div>
      {/* Number of likes and comments */}
      <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <AiTwotoneLike className='text-lg text-blue-600' />
          <p className='font-semibold text-lg ml-2'>0</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='font-semibold text-lg mr-2'>0</p>
          <FaComment className='text-lg text-red-500' />
        </div>
      </div>

      <div className='w-full h-[1px] my-2 bg-gray-300'></div>

      {/* Like and comment button */}
      <div className='flex justify-center'>
        <div className='w-1/2 py-1 flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-300'>
          <AiOutlineLike className='text-lg font-semibold' />
          <p className='text-lg font-semibold ml-2'>Like</p>
        </div>
        <div className='w-1/2 py-2 flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-300'>
          <FaRegComment className='text-lg font-semibold' />
          <p className='text-lg font-semibold ml-2'>Comments</p>
        </div>
      </div>

      {/* Add Comment */}
      <div className='flex mt-3'>
        <HiUserCircle className='text-4xl text-gray-600 mr-2' />
        <div className='w-full relative'>
          <input type="text" placeholder='Enter your comment ...' className='w-full h-[33px] bg-gray-300 rounded-full px-4 py-2 font-semibold focus:outline-none' />
          <div className='absolute h-full flex justify-between items-center right-3 top-0'>
            <HiUserCircle className='text-xl' />
            <HiUserCircle className='text-xl' />
            <HiUserCircle className='text-xl' />
          </div>
        </div>
      </div>

    </div>
  )
}

const Post = () => {
  return (
    <div className='bg-white rounded-xl p-5 mt-4'>
        <PostHeader />
        <PostBody />
        <PostFooter />
    </div>
  )
}

export default Post