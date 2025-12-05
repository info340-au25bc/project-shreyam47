// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5yC8rNve-nytwxp_QHagTmZLa9VF_064",
  authDomain: "greenthread-info340.firebaseapp.com",
  databaseURL: "https://greenthread-info340-default-rtdb.firebaseio.com",
  projectId: "greenthread-info340",
  storageBucket: "greenthread-info340.firebasestorage.app",
  messagingSenderId: "1001326053172",
  appId: "1:1001326053172:web:298a5e52332957b6fc0761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);