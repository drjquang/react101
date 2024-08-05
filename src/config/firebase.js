// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDNGMWjLYxCZ-5eQtqZH1AN4SCKL1CRzC0",
//   authDomain: "react123-9643c.firebaseapp.com",
//   databaseURL:
//     "https://react123-9643c-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "react123-9643c",
//   storageBucket: "react123-9643c.appspot.com",
//   messagingSenderId: "941870291118",
//   appId: "1:941870291118:web:598600316bace5ee8f753f",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
