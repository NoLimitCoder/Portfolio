import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {

    apiKey: "AIzaSyDm76IZ7Atmx6ArgSYQTv8Qr5NSSCKUcCM",
  
    authDomain: "react-portfolio-dashboar-5652d.firebaseapp.com",
  
    projectId: "react-portfolio-dashboar-5652d",
  
    storageBucket: "react-portfolio-dashboar-5652d.appspot.com",
  
    messagingSenderId: "627550351669",
  
    appId: "1:627550351669:web:04049f7c2e8e64c8c2dc7c"
  
  };
  


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);