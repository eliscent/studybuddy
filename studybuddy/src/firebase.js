import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB38oI8dbuTFPENAVWRGyDM9bVT3QBJEzc",
  authDomain: "studybuddy-ffc0b.firebaseapp.com",
  projectId: "studybuddy-ffc0b",
  storageBucket: "studybuddy-ffc0b.firebasestorage.app",
  messagingSenderId: "526476105758",
  appId: "1:526476105758:web:e437ad148fd5e8f5c6b60f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);