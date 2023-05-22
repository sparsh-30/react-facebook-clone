import story_image from "./../assets/demo.jfif";
import Avatar from "@mui/material/Avatar";
import AddStory from "./AddStory";

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
