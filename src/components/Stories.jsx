import { useState } from "react";
import { useDispatch } from "react-redux";
import { displayPictureScreen } from "../store/screenSlice";
import { setStoryImageURL } from "../store/imageSlice";
import Avatar from "@mui/material/Avatar";
import AddStory from "./AddStory";
import { db, auth } from "./../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import date from "date-and-time";

const Story = (props) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(setStoryImageURL(props.story.storyImage));
    dispatch(displayPictureScreen());
    if (props.story.visited.includes(auth.currentUser.email) === true) {
      await updateDoc(doc(db, "Stories", props.story.id), {
        visited: arrayRemove(auth.currentUser.email),
      });
    } else
      await updateDoc(doc(db, "Stories", props.story.id), {
        visited: arrayUnion(auth.currentUser.email),
      });
  };

  return (
    <div
      onClick={handleClick}
      className="mx-2 w-40 h-72 rounded-lg relative hover:cursor-pointer"
    >
      <img
        src={props.story.storyImage}
        className="h-72 w-40 rounded-lg"
        alt="Story_Image"
      />
      <div className="flex justify-center items-center p-3  absolute top-0 left-0">
        <div
          className={`p-1 rounded-full ${
            props.story.visited.includes(auth.currentUser.email)
              ? ""
              : "bg-gradient-to-r from-[#e30066] to-[#FEDA77]"
          }`}
        >
          <Avatar
            src={props.story.profilePicture}
            sx={{ width: "45px", height: "45px" }}
          />
        </div>
      </div>
    </div>
  );
};

const Stories = () => {
  const [stories, setStories] = useState([]);

  const postRef = collection(db, "Stories");
  onSnapshot(query(postRef, orderBy("createdAt", "desc")), (snapshot) => {
    setStories(
      snapshot.docs.map((story) => ({ id: story.id, ...story.data() }))
    );
  });

  return (
    <div>
      {/* <div className="w-[100vw] h-[100vh] bg-white fixed top-0 left-0 z-50"></div> */}
      <div
        id="stories-holder"
        className="my-4 py-5 px-2 flex bg-white rounded-lg w-full overflow-x-scroll"
      >
        <div className="flex">
          <AddStory />
          {/* <Story />
          <Story />
          <Story />
          <Story />
          <Story /> */}
          {stories.map((story, index) => {
            const now = new Date();
            const format_now = parseInt(date.format(now, "YYYYMMDDhhmmss"));
            if (format_now - story.createdAt < 24 * 60 * 60)
              return <Story key={index} story={story} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Stories;
