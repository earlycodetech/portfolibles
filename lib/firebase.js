import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolibles-bdc36.firebaseapp.com",
  projectId: "portfolibles-bdc36",
  storageBucket: "portfolibles-bdc36.appspot.com",
  messagingSenderId: "136376703904",
  appId: "1:136376703904:web:a5fd92f8cebcdf31e762c5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }