// /services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXm-tXxslLbrJnnkZMXm-iSde3ll40p64",
  authDomain: "mad-project-0.firebaseapp.com",
  projectId: "mad-project-0",
  storageBucket: "mad-project-0.appspot.com",
  messagingSenderId: "160389153136",
  appId: "1:160389153136:web:a2528adb0a9a2cfa6a4fb5",
  measurementId: "G-TSY4JDX3MJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
