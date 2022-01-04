// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBceVeA8qqvrqBnPO5lQjF9LS9FjPleld8",
  authDomain: "blogx-47473.firebaseapp.com",
  projectId: "blogx-47473",
  storageBucket: "blogx-47473.appspot.com",
  messagingSenderId: "416155854131",
  appId: "1:416155854131:web:61e7b7f047393b00ac4a46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
