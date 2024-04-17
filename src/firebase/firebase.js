// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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

// Initialize Firebase Authentication
export const auth = getAuth(app);

export const storage = getStorage(app);

// Initialize Firestore
const db = getFirestore(app);

export default db;
