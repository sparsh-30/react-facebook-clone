import facebook_logo from "./../assets/facebook_logo.png";
import facebook_name from "./../assets/facebook_name.png";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "./../../firebase";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setAvatarURL } from "./../store/userSlice";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        console.log(result._tokenResponse.photoUrl);
        console.log(result._tokenResponse.fullName);
        dispatch(setFirstName(result._tokenResponse.firstName));
        dispatch(setLastName(result._tokenResponse.lastName));
        dispatch(setAvatarURL(result._tokenResponse.photoUrl));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white">
      <div className="w-[400px] h-[100vh] mx-auto flex flex-col justify-between items-center py-20">
        {/* Logo images */}
        <div className="flex flex-col justify-start items-center">
          <img src={facebook_logo} alt="" className="w-[200px] h-[200px]" />
          <img src={facebook_name} alt="" className="w-[300px]" />
        </div>

        {/* Login buttons */}
        <div className="flex flex-col max-w-sm gap-2">
          <button
            onClick={signInWithGoogle}
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg my-1"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Sign in with Google
          </button>

          <button
            onClick={signInWithFacebook}
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg my-1"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
