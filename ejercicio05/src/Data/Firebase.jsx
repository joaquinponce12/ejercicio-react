import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRt_NW71MCsnAGfDVz38oYjLUQOBqxzwE",
  authDomain: "proyectofinal-7b4ac.firebaseapp.com",
  projectId: "proyectofinal-7b4ac",
  storageBucket: "proyectofinal-7b4ac.appspot.com",
  messagingSenderId: "813935563117",
  appId: "1:813935563117:web:8bd39a5cae9c03775c4a64"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);