import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import PostHolder from "./components/PostHolder";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  signInUser,
  signOutUser,
} from "./store/userSlice";
import { useEffect } from "react";
import { auth } from "./../firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userSignedIn);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const names = user.displayName.split(" ");
        dispatch(setFirstName(names[0]));
        dispatch(setLastName(names[names.length - 1]));
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
          <Navbar />
          <div className="mt-[65px] grid grid-cols-7">
            <LeftSidebar />
            <PostHolder />
            <div className="w-2/4"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
