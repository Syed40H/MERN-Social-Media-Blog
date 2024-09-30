// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2046d.firebaseapp.com",
  projectId: "mern-blog-2046d",
  storageBucket: "mern-blog-2046d.appspot.com",
  messagingSenderId: "961618384027",
  appId: "1:961618384027:web:83cac3d41c8c8a642ea23e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);