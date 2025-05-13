// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA11-KfIQdfGRY9T0no38ZGgcKV3nvVFzY",
    authDomain: "coffee-store-352d3.firebaseapp.com",
    projectId: "coffee-store-352d3",
    storageBucket: "coffee-store-352d3.firebasestorage.app",
    messagingSenderId: "1028364934904",
    appId: "1:1028364934904:web:35652a246a345d9848e50d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);