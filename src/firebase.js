// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmgA82CASJmvBROFh_A0r6esrxQS1ULDc",
  authDomain: "netflix-bf622.firebaseapp.com",
  projectId: "netflix-bf622",
  storageBucket: "netflix-bf622.appspot.com",
  messagingSenderId: "31771814560",
  appId: "1:31771814560:web:d46f26626381a62561f7c5",
  measurementId: "G-JQ2J8E4SMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
