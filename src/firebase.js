// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDKY0TowMAZQDsbQIRQjc7sc3DiaJBlA",
  authDomain: "inclusiplandash.firebaseapp.com",
  databaseURL: "https://inclusiplandash-default-rtdb.firebaseio.com",
  projectId: "inclusiplandash",
  storageBucket: "inclusiplandash.appspot.com",
  messagingSenderId: "302706637928",
  appId: "1:302706637928:web:830eb881155307d7e70fdd",
  measurementId: "G-4YR6745VRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);