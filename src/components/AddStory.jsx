import { IoMdAddCircle } from "react-icons/io";
import Background from "./../assets/background.avif";
import { useDispatch } from "react-redux";
import { displayStoryScreen } from "../store/screenSlice";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const AddStory = () => {

  const dispatch=useDispatch();

  return (
    <div onClick={()=> dispatch(displayStoryScreen())} className="mx-2 w-40 h-72 rounded-lg relative hover:cursor-pointer">
    
      <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
        <IoMdAddCircle className="text-5xl text-gray-500" />
        <p className="text-lg font-bold text-gray-500">Add Story</p>
      </div>
      <img className="w-40 h-72 rounded-lg" src={Background} alt="" />
    </div>
  );
};

export default AddStory;
