import story_image from "./../../../demo.jfif";
import Avatar from "@mui/material/Avatar";
import Background from "./../../../background.avif";
import { IoMdAddCircle } from "react-icons/io";

const Story = () => {
  return (
    <div className="mx-2 w-40 h-72 rounded-lg relative hover:cursor-pointer">
      <img
        src={story_image}
        className="h-72 w-40 rounded-lg"
        alt="Story_Image"
      />
      <div className="flex justify-center items-center absolute bottom-0 py-4 w-full">
        <p className="font-bold text-xl text-white">Sparsh</p>
      </div>
      <div className="flex justify-center items-center p-3 absolute top-0 left-0">
        <Avatar
          className="border-[6px] border-blue-600"
          sx={{ width: "50px", height: "50px" }}
        >
          S
        </Avatar>
      </div>
    </div>
  );
};

const AddStory = () => {
  return (
    <div className="mx-2 w-40 h-72 rounded-lg relative hover:cursor-pointer">
      <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
        <IoMdAddCircle className="text-5xl text-gray-500" />
        <p className="text-lg font-bold text-gray-500">Add Story</p>
      </div>
      <img className="w-40 h-72 rounded-lg" src={Background} alt="" />
    </div>
  );
};

const Stories = () => {
  return (
    <div className="my-4 py-5 px-2 flex bg-white rounded-lg w-full overflow-x-scroll">
      <div className="flex">
        <AddStory />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
};

export default Stories;
