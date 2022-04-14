// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAV0agEXrutq8bmQ9GdGtclNz_44dAYIs",
    authDomain: "ema-john-simple-3433e.firebaseapp.com",
    projectId: "ema-john-simple-3433e",
    storageBucket: "ema-john-simple-3433e.appspot.com",
    messagingSenderId: "605531691194",
    appId: "1:605531691194:web:b6485a9e8b8437b3660a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;