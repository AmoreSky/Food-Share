import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, updateProfile, updateEmail } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJ2fLKk9xOdtJe35AXthDJkpxK__3kaEI",
    authDomain: "food-share-caf03.firebaseapp.com",
    projectId: "food-share-caf03",
    storageBucket: "food-share-caf03.firebasestorage.app",
    messagingSenderId: "988801051892",
    appId: "1:988801051892:web:298c5ad05c1f3ed6cec2a1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signOut, doc, addDoc, getDocs, collection, updateDoc, deleteDoc, onAuthStateChanged, updateProfile, updateEmail };