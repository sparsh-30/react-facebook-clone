import Avatar from "@mui/material/Avatar";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "./../../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOutUser } from "../store/userSlice";

const LeftSidebar = () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const avatarURL = useSelector((state) => state.user.avatarURL);

  const handleLogOut = () => {
    signOut(auth).then(() => dispatch(signOutUser()));
  };

  return (
    <div className="w-full pt-4 pl-3 col-span-2">
      <ul>
        <li className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer">
          <Avatar
            src={avatarURL}
            sx={{ width: "35px", height: "35px" }}
            className="mr-3"
          />
          <p className="text-lg font-bold">{firstName + " " + lastName}</p>
        </li>

        <li className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
            alt="groups"
            width="35px"
            height="35px"
            className="mr-3"
          />
          <p className="text-lg font-bold">Friends</p>
        </li>

        <li className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
            alt="groups"
            width="35px"
            height="35px"
            className="mr-3"
          />
          <p className="text-lg font-bold">Groups</p>
        </li>

        <li className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            alt="groups"
            width="35px"
            height="35px"
            className="mr-3"
          />
          <p className="text-lg font-bold">Marketplace</p>
        </li>

        <li className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
            alt="groups"
            width="35px"
            height="35px"
            className="mr-3"
          />
          <p className="text-lg font-bold">Watch</p>
        </li>

        <li className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png"
            alt="groups"
            width="35px"
            height="35px"
            className="mr-3"
          />
          <p className="text-lg font-bold">Memories</p>
        </li>

        <li
          onClick={handleLogOut}
          className="flex p-2 justify-start items-center w-2/3 rounded-xl hover:bg-white transition-all ease-in-out duration-150 cursor-pointer"
        >
          <FiLogOut className="text-3xl mr-3 text-blue-500" />
          <p className="text-lg font-bold">Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
