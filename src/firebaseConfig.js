// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh1PIVpCu6Fy5PdpfOWT1e4S5EWXwFLig",
  authDomain: "first-blog-5e3d9.firebaseapp.com",
  projectId: "first-blog-5e3d9",
  storageBucket: "first-blog-5e3d9.appspot.com",
  messagingSenderId: "305890569655",
  appId: "1:305890569655:web:15de62697f543744310c32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
