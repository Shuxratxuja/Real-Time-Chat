import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8LrLzQavDE1jdStDmO5OmMeSGK8OaiHw",
  authDomain: "chat-e8193.firebaseapp.com",
  projectId: "chat-e8193",
  storageBucket: "chat-e8193.firebasestorage.app",
  messagingSenderId: "505336645507",
  appId: "1:505336645507:web:7253fcf446fdfedf7858b6",
  measurementId: "G-XK72DG84NR"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app); // Foydalanuvchilar bilan ishlash uchun
export const firestore = getFirestore(app); // Ma'lumotlar bazasi (xabarlar) bilan ishlash uchun
export const googleProvider = new GoogleAuthProvider(); // Google orqali kirish usuli