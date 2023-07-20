// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKq7953xHyCQSDEm9zN8otse8M-VCkQuE",
  authDomain: "library-app-b52f6.firebaseapp.com",
  projectId: "library-app-b52f6",
  storageBucket: "library-app-b52f6.appspot.com",
  messagingSenderId: "614028472971",
  appId: "1:614028472971:web:f112e5791e50af75ef9a8e",
  measurementId: "G-HZVWTQJBLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };