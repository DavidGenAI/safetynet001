// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8skdxEjPh8rpE2bI9-h8FALc1oMeKY2M",
  authDomain: "worldshorts-19fbc.firebaseapp.com",
  projectId: "worldshorts-19fbc",
  storageBucket: "worldshorts-19fbc.firebasestorage.app",
  messagingSenderId: "743628325773",
  appId: "1:743628325773:web:5e429edc1a66a67455f3c4",
  measurementId: "G-PWVR3QK3DD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // Export `db` as default
export { collection, onSnapshot };
