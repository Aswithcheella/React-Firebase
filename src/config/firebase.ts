// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAZyi2VrPDcmknsRXlIamAOMYd3yVoQsQ",
  authDomain: "react-firebase-app-af577.firebaseapp.com",
  projectId: "react-firebase-app-af577",
  storageBucket: "react-firebase-app-af577.appspot.com",
  messagingSenderId: "909149808786",
  appId: "1:909149808786:web:f5511b62dd6dced9f5de4b",
  measurementId: "G-DZ13EF4V0Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
