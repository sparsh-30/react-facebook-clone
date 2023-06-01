import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { hidePictureScreen } from "../store/screenSlice";
// import post_image from "./../assets/post_image.jpg";

const PictureScreen = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] z-[100]">
      <div className="mt-8 flex justify-end px-16">
        <div
          onClick={() => dispatch(hidePictureScreen())}
          className="p-2 rounded-full hover:bg-black"
        >
          <ImCross className="text-white text-xl" />
        </div>
      </div>
      <img
        className="mx-auto w-2/3 h-5/6"
        src={useSelector((state) => state.image.storyImageURL)}
        alt=""
      />
    </div>
  );
};

export default PictureScreen;
