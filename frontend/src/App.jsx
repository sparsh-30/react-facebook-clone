import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import PostHolder from "./components/PostHolder";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { auth } from "./../firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setSignedUser(true);
      else setSignedUser(false);
    });
  }, []);

  return (
    <>
      {signedUser === false ? (
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
    </>
  );
}

export default App;
