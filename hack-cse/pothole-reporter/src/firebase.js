import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB97RNBDM-Jp6p0lv9qUhp3lJnySdjbUqM",
    authDomain: "pothole-e4940.firebaseapp.com",
    projectId: "pothole-e4940",
    storageBucket: "pothole-e4940.firebasestorage.app",
    messagingSenderId: "123102059383",
    appId: "1:123102059383:web:8c04083002d56a59579f72",
    measurementId: "G-LZD9M70J4M"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage, db, auth };
