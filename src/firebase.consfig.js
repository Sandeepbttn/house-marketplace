
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZ19ytLQlgZIK4BXpcnHjoxLsQ80f_As",
  authDomain: "house-market-place-3ad8c.firebaseapp.com",
  projectId: "house-market-place-3ad8c",
  storageBucket: "house-market-place-3ad8c.appspot.com",
  messagingSenderId: "24072019807",
  appId: "1:24072019807:web:4b15aa5ba55f4d4db4e0ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()