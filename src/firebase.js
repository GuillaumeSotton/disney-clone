import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-H7R_R3HJBiOGp6fWz3EYS0hx2f--As",
  authDomain: "disneyplus-clone-5a579.firebaseapp.com",
  projectId: "disneyplus-clone-5a579",
  storageBucket: "disneyplus-clone-5a579.appspot.com",
  messagingSenderId: "100297411967",
  appId: "1:100297411967:web:40f501f37d8177d1419e4a",
  measurementId: "G-Q80VRVGCV4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
