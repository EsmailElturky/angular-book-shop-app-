// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4jkizNUxU1S4Sb-NeRn-BGNa-HfhmPdc",
  authDomain: "angular-book-shop-1162b.firebaseapp.com",
  projectId: "angular-book-shop-1162b",
  storageBucket: "angular-book-shop-1162b.appspot.com",
  messagingSenderId: "230124351479",
  appId: "1:230124351479:web:cc7c07be9f2a5e9ee8c8f2",
  measurementId: "G-02RZPT9MB2"
};

// Initialize Firebase

export const firebase=initializeApp(firebaseConfig);