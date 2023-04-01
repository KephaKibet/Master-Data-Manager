// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC5YPNCXaM5oEP9j8NKm0kzcxAIYO1kS4A",
  authDomain: "master-data-manager-mdm.firebaseapp.com",
  databaseURL: "https://master-data-manager-mdm-default-rtdb.firebaseio.com",
  projectId: "master-data-manager-mdm",
  storageBucket: "master-data-manager-mdm.appspot.com",
  messagingSenderId: "972929733490",
  appId: "1:972929733490:web:d425fb2662e9abd25543eb",
  measurementId: "G-9E93Y1LW9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);