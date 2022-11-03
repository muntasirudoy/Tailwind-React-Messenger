import {
    initializeApp
} from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBR2wZN3mqCpdUA9_-BN2ZJOJIClT5PkF8",
    authDomain: "messenger-1bbd2.firebaseapp.com",
    projectId: "messenger-1bbd2",
    storageBucket: "messenger-1bbd2.appspot.com",
    messagingSenderId: "966649482296",
    appId: "1:966649482296:web:4af5093744e7a1fa4eaacd",
    measurementId: "G-HD84H20VJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig

