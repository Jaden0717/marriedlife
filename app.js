// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Xar88NBCkcXcbhIhMD4fRzVxHFxLnC8",
  authDomain: "marriedlife-aa033.firebaseapp.com",
  projectId: "marriedlife-aa033",
  storageBucket: "marriedlife-aa033.firebasestorage.app",
  messagingSenderId: "976292627031",
  appId: "1:976292627031:web:effb16f15295ab64361912",
  measurementId: "G-GT58WHT2PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
