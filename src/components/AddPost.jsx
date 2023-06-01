import { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { useSelector } from "react-redux";
import date from "date-and-time";
import { db, storage, auth } from "./../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { Oval } from "react-loader-spinner";

const AddPost = () => {
  const userCaption = useRef(null);
  const [loading, setLoading] = useState(false);
  const [postImageURL, setPostImageURL] = useState("");

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const avatarURL = useSelector((state) => state.user.avatarURL);

  const savePost = async () => {
    setLoading(true);
    const postCaption = userCaption.current.value;
    const d = new Date();
    const postDate = date.format(d, "DD MMMM,YYYY");

    let postImage = "";
    if (postImageURL !== "") {
      const upload = await uploadBytes(
        ref(storage, `POSTS/${uuidv4()}`),
        postImageURL
      );
      setPostImageURL("");
      postImage = await getDownloadURL(ref(storage, upload.metadata.fullPath));
    }

    const postData = {
      createdAt: new Date(),
      userName: firstName + " " + lastName,
      profilePicture: auth.currentUser.photoURL,
      postCaption,
      postDate,
      postImage,
      numberOfLikes: 0,
      postLikes: [],
    };

    await setDoc(doc(db, "Posts", uuidv4()), postData);
    userCaption.current.value = "";
    setLoading(false);
  };

  return (
    <div className="rounded-xl py-5 px-5 bg-white z-20">
      {/* Profile picture and write something input box */}
      <div className="flex items-center mt-1">
        <Avatar
          src={avatarURL}
          sx={{
            width: "40px",
            height: "40px",
          }}
          className="mr-2"
        />
        <div className="w-full h-[35px] relative">
          <input
            ref={userCaption}
            type="text"
            placeholder={`What's in your mind, ${firstName} ?`}
            className="w-full h-full bg-gray-300 rounded-full px-4 py-2 font-semibold focus:outline-none"
          />
        </div>
        <div
          onClick={savePost}
          className="hover:bg-gray-200 hover:rounded-full hover:cursor-pointer ml-2 p-2"
        >
          {loading === true ? (
            <Oval
              height={28}
              width={28}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={5}
              strokeWidthSecondary={8}
            />
          ) : (
            <SendIcon sx={{ width: "28px", height: "28px" }} />
          )}
        </div>
      </div>

      <div className="w-full h-[1px] my-4 bg-gray-300"></div>

      {/* AddPost Buttons */}
      <div className="grid grid-cols-3">
        <div className="flex justify-center items-center py-1 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer">
          <VideoCallIcon
            sx={{ color: "error.light", height: "30px", width: "30px" }}
          />
          <p className="font-semibold ml-2">Live Video</p>
        </div>
        <div className="flex justify-center items-center py-1 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer">
          <PhotoLibraryIcon sx={{ color: "success.light" }} />
          <label className="hover:cursor-pointer">
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={(e) => setPostImageURL(e.target.files[0])}
            />
            <p className="font-semibold ml-2">Photo/Video</p>
          </label>
        </div>
        <div className="flex justify-center items-center py-1 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer">
          <EmojiEmotionsOutlinedIcon sx={{ color: "warning.light" }} />
          <p className="font-semibold ml-2">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
