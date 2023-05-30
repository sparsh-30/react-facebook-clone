import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneLike, AiOutlineLike, AiOutlineFileGif } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BiCamera } from "react-icons/bi";
import Avatar from "@mui/material/Avatar";
import { db, auth } from "./../../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const PostHeader = (props) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      {/* User details div */}
      <div className="flex justify-center items-center w-fit">
        <Avatar
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "primary.dark",
          }}
          className="mr-3"
        >
          {props.userName.charAt(0)}
        </Avatar>
        <div>
          <p className="font-semibold text-sm">{props.userName}</p>
          <p className="text-sm font-semibold text-gray-600">
            {props.postDate}
          </p>
        </div>
      </div>

      {/* Menu button */}
      <div className="cursor-pointer hover:bg-gray-300 p-1 rounded-full">
        <BsThreeDots className="text-2xl" />
      </div>
    </div>
  );
};

const PostBody = (props) => {
  return (
    <div>
      {/* Post captions */}
      <p className="text-gray-700 font-semibold">{props.postCaption}</p>

      {/* Post image */}
      {props.postImage === "" ? (
        <div></div>
      ) : (
        <img
          src={props.postImage}
          className="w-full h-[400px] my-2 rounded-md"
          alt="Post Image"
        />
      )}
    </div>
  );
};

const PostFooter = (props) => {
  const handleLike = async () => {
    if (props.postLikes.includes(auth.currentUser.email) === true) {
      await updateDoc(doc(db, "Posts", props.postID), {
        postLikes: arrayRemove(auth.currentUser.email),
      });
    } else
      await updateDoc(doc(db, "Posts", props.postID), {
        postLikes: arrayUnion(auth.currentUser.email),
      });
  };

  return (
    <div>
      {/* Number of likes and comments */}
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <AiTwotoneLike className="text-lg text-blue-600" />
          <p className="font-semibold text-lg ml-2">{props.postLikes.length}</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-semibold text-lg mr-2">0</p>
          <FaComment className="text-lg text-red-500" />
        </div>
      </div>

      <div className="w-full h-[1px] my-2 bg-gray-300"></div>

      {/* Like and comment button */}
      <div className="flex justify-center">
        <div
          onClick={handleLike}
          className="w-1/2 py-1 flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-300"
        >
          {props.postLikes.includes(auth.currentUser.email) === true ? (
            <AiTwotoneLike className="text-lg text-blue-600" />
          ) : (
            <AiOutlineLike className="text-lg font-semibold" />
          )}
          <p className="text-lg font-semibold ml-2">Like</p>
        </div>
        <div className="w-1/2 py-2 flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-300">
          <FaRegComment className="text-lg font-semibold" />
          <p className="text-lg font-semibold ml-2">Comments</p>
        </div>
      </div>

      {/* Add Comment */}
      <div className="flex items-center mt-3">
        <Avatar
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "primary.dark",
          }}
          className="mr-2"
        >
          {props.userName.charAt(0)}
        </Avatar>
        <div className="w-full h-[35px] relative">
          <input
            type="text"
            placeholder="Enter your comment ..."
            className="w-full h-full bg-gray-300 rounded-full px-4 py-2 font-semibold focus:outline-none"
          />
          <div className="h-full absolute right-3 top-0 flex justify-center items-center">
            <div className="w-fit px-[4px] mr-2 py-[4px] text-gray-600 hover:text-black hover:bg-slate-400 hover:rounded-full">
              <MdOutlineEmojiEmotions className="text-xl font-bold" />
            </div>
            <div className="w-fit px-[4px] mr-2 py-[4px] text-gray-600 hover:text-black hover:bg-slate-400 hover:rounded-full">
              <BiCamera className="text-xl font-bold" />
            </div>
            <div className="w-fit px-[4px] mr-2 py-[4px] text-gray-600 hover:text-black hover:bg-slate-400 hover:rounded-full">
              <AiOutlineFileGif className="text-xl font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Post = (props) => {
  const post = props.post;

  return (
    <div className="bg-white rounded-xl p-5 my-4">
      <PostHeader userName={post.userName} postDate={post.postDate} />
      <PostBody postImage={post.postImage} postCaption={post.postCaption} />
      <PostFooter
        userName={post.userName}
        numberOfLikes={post.numberOfLikes}
        postLikes={post.postLikes}
        postID={post.id}
      />
    </div>
  );
};

export default Post;
