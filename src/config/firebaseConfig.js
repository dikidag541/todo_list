import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDeKaOfCA82DFhDy5GMgTt7vi7aZndiWWI",
    authDomain: "to-do-list-d92b0.firebaseapp.com",
    projectId: "to-do-list-d92b0",
    storageBucket: "to-do-list-d92b0.firebasestorage.app",
    messagingSenderId: "128539062677",
    appId: "1:128539062677:web:f444378b0388c144f5869c",
    measurementId: "G-TY1X55B7LY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 