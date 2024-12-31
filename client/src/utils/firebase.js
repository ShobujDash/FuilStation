
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fuilstation.firebaseapp.com",
  projectId: "fuilstation",
  storageBucket: "fuilstation.firebasestorage.app",
  messagingSenderId: "479197639154",
  appId: "1:479197639154:web:0e3abc2534d322869ffb6b",
  measurementId: "G-HCCGNBBGJE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

