import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import AddStory from "./AddStory";
import { db } from "./../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import date from "date-and-time";

const Story = (props) => {
  const avatarURL = useSelector((state) => state.user.avatarURL);

  return (
    <div className="mx-2 w-40 h-72 rounded-lg relative hover:cursor-pointer">
      <img
        src={props.story.storyImage}
        className="h-72 w-40 rounded-lg"
        alt="Story_Image"
      />
      <div className="flex justify-center items-center p-3  absolute top-0 left-0">
        <div className="p-1 bg-gradient-to-r from-[#e30066] to-[#FEDA77] rounded-full">
          <Avatar src={avatarURL} sx={{ width: "45px", height: "45px" }} />
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
