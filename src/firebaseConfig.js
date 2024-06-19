import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2CyLzpQ5gJVT7uQ0LBxunIrq0X8CqgKE",
  authDomain: "proyecto-paw-pets.firebaseapp.com",
  projectId: "proyecto-paw-pets",
  storageBucket: "proyecto-paw-pets.appspot.com",
  messagingSenderId: "74934158133",
  appId: "1:74934158133:web:35b3e3d9251ab9adb8c27c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app;

//getAuth( app )