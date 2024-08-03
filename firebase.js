// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOckq_JfHVCURe8KeW190H_IcFNczx8n0",
  authDomain: "inventory-management-66829.firebaseapp.com",
  projectId: "inventory-management-66829",
  storageBucket: "inventory-management-66829.appspot.com",
  messagingSenderId: "1041442330310",
  appId: "1:1041442330310:web:674914074e873cde0129c7",
  measurementId: "G-FBN1NBT1JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}