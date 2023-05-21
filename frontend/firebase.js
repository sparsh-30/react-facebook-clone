import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB66slYps6bsGZAytYJNiQVglzizswH7pQ",
  authDomain: "react-facebook-clone-7de0f.firebaseapp.com",
  projectId: "react-facebook-clone-7de0f",
  storageBucket: "react-facebook-clone-7de0f.appspot.com",
  messagingSenderId: "699574371176",
  appId: "1:699574371176:web:9aff81edf020e50fcbccdd",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export {app};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
export { app, auth };
