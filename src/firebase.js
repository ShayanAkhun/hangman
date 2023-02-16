// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe4YPlukjfjqcvilB0TGImEyp-UwkYsW4",
  authDomain: "hangman-f8ed7.firebaseapp.com",
  projectId: "hangman-f8ed7",
  storageBucket: "hangman-f8ed7.appspot.com",
  messagingSenderId: "1037525211108",
  appId: "1:1037525211108:web:3cc3a9ba5c9cd9569859f1",
  measurementId: "G-S6HMFPSR9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
