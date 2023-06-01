import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import PostHolder from "./components/PostHolder";
import Login from "./components/Login";
import AddStoryScreen from "./components/AddStoryScreen";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setAvatarURL,
  signInUser,
  signOutUser,
} from "./store/userSlice";
import { useEffect } from "react";
import { auth } from "./../firebase";
import { onAuthStateChanged } from "firebase/auth";
import PictureScreen from "./components/PictureScreen";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userSignedIn);
  const showStoryScreen = useSelector((state) => state.screen.showStoryScreen);
  const showPictureScreen = useSelector(
    (state) => state.screen.showPictureScreen
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const names = user.displayName.split(" ");
        dispatch(setFirstName(names[0]));
        dispatch(setLastName(names[names.length - 1]));
        dispatch(setAvatarURL(user.photoURL));
        dispatch(signInUser());
      } else dispatch(signOutUser());
    });
  });

  return (
    <div>
      {user === false ? (
        <Login />
      ) : (
        <div>
          {showStoryScreen === true ? <AddStoryScreen /> : ""}
          {showPictureScreen === true ? <PictureScreen /> : ""}
          <div>
            <Navbar />
            <div className="mt-[65px] grid grid-cols-7">
              <LeftSidebar />
              <PostHolder />
              <div className="w-2/4"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
