import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAkrYXzPYhxGdcmuLK6lQJ82BOOxrBYp_k",
  authDomain: "simple-app-f91fb.firebaseapp.com",
  projectId: "simple-app-f91fb",
  storageBucket: "simple-app-f91fb.appspot.com",
  messagingSenderId: "1094284664899",
  appId: "1:1094284664899:web:19694de918c352e520b4f6",
  measurementId: "G-HD8NK2M4Z6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
