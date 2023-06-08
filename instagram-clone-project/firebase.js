// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { REACT_APP_APIKEY, REACT_APP_AUTHDOMAIN, REACT_APP_PROJECTID, REACT_APP_STORAGE_BUCKET, REACT_APP_MSGSENDERID, REACT_APP_APPID } from "@env"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHQw0cGyLarBp5glr2bbUXRenf8lJsrV0",
    authDomain: "instagram-clone-omer.firebaseapp.com",
    projectId: "instagram-clone-omer",
    storageBucket: "instagram-clone-omer.appspot.com",
    messagingSenderId: "902101879190",
    appId: "1:902101879190:web:dceea17a77c511e705f5b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);