// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIDbj5kZYPQmmgRBCddCEdYGfWo0z_xRU",
    authDomain: "shenp-96ced.firebaseapp.com",
    projectId: "shenp-96ced",
    storageBucket: "shenp-96ced.firebasestorage.app",
    messagingSenderId: "598199358408",
    appId: "1:598199358408:web:f47c8c5d989f50101826fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

