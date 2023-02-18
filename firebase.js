import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-x9CSU0JJr4zC73u-84V6NEMZg1urVfI",
  authDomain: "codelab-e930e.firebaseapp.com",
  projectId: "codelab-e930e",
  storageBucket: "codelab-e930e.appspot.com",
  messagingSenderId: "114233429139",
  appId: "1:114233429139:web:6ea8e76aff83578b2dd166",
};

// Initialize Firebase
const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();
const db       = getFirestore(app);

export { auth, provider, db };
