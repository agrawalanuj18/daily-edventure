// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "daily-edventure.firebaseapp.com",
  projectId: "daily-edventure",
  storageBucket: "daily-edventure.appspot.com",
  messagingSenderId: "1058591127213",
  appId: "1:1058591127213:web:9f82be85354e79d5137824"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);