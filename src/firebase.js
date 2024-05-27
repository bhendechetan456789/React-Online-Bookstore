
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';




const firebaseConfig = {
  apiKey: "AIzaSyD6ul9FUK6OgLAoDATp3Q9zw7V9AcIFokk",
  authDomain: "authentication1-a021a.firebaseapp.com",
  projectId: "authentication1-a021a",
  storageBucket: "authentication1-a021a.appspot.com",
  messagingSenderId: "851366335969",
  appId: "1:851366335969:web:9fe67b0783f5fce0ff2ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()