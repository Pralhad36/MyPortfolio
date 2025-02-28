// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBwFWze6Lv5bE9nuJo8NI5byFtforeKHFU",
  authDomain: "recipe-project-1fd68.firebaseapp.com",
  projectId: "recipe-project-1fd68",
  storageBucket: "recipe-project-1fd68.firebasestorage.app",
  messagingSenderId: "599945573540",
  appId: "1:599945573540:web:842f3e871217df66522231",
  measurementId: "G-3VBZG17JKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
