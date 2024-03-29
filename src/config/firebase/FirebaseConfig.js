import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxs9x54uSc-S35h9Xjekpstorcn6MMNFM",
    authDomain: "city-shops.firebaseapp.com",
    projectId: "city-shops",
    storageBucket: "city-shops.appspot.com",
    messagingSenderId: "992265461180",
    appId: "1:992265461180:web:290d6391a5e377c0dddfb9",
    measurementId: "G-M3QZNMSD7K"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
