import { useState } from "react";
import { hideStoryScreen } from "../store/screenSlice";
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "./../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import date from 'date-and-time';

const AddStoryScreen = () => {
  const [storyImage, setStoryImage] = useState("");
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const handleSubmit = async () => {
    if (loading === true) return;
    if (storyImage === "") {
      setWarning(true);
      return;
    }
    setLoading(true);
    const upload = await uploadBytes(
      ref(storage, `STORIES/${uuidv4()}`),
      storyImage
    );
    setStoryImage("");
    setWarning(false);
    const postImage = await getDownloadURL(
      ref(storage, upload.metadata.fullPath)
    );
    
    const now=new Date();
    const format_now=date.format(now,"YYYYMMDDhhmmss");
    const storyData = {
      createdAt: parseInt(format_now),
      username: firstName + " " + lastName,
      storyImage: postImage,
    };
    await setDoc(doc(db, "Stories", uuidv4()), storyData);
    setLoading(false);
    dispatch(hideStoryScreen());
  };

  const handleClose = () => {
    if (loading === true) return;
    dispatch(hideStoryScreen());
  };

  return (
    <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.6)] z-[100] fixed top-0 left-0 flex justify-center py-5 transition-all duration-500 ease-in-out">
      <div className="w-1/3 h-fit p-10 bg-white rounded-xl">
        <p className="text-center text-2xl text-gray-500 font-bold">
          Add Story
        </p>
        <div className="w-full h-[2px] bg-gray-300 my-5"></div>
        <p className="inline-block font-semibold">Choose image: </p>
        <input
          className="ml-3"
          type="file"
          accept="image/*"
          onChange={(e) => setStoryImage(e.target.files[0])}
        />
        {warning === true ? (
          <p className="text-red-600">Please select an image.</p>
        ) : (
          ""
        )}
        <div className="w-full h-[2px] bg-gray-300 my-5"></div>
        <div className="flex justify-center">
          <button
            onClick={handleClose}
            className={`px-3 w-[49%] py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-all duration-75 ease-in-out ${
              loading === true ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className={`px-3 w-[49%] py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-75 ease-in-out ml-4 ${
              loading === true ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStoryScreen;
