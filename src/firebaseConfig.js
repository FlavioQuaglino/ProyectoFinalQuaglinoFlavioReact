import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDC4uT1eyF_Gkn5bWyjOGPF2d5ruQlPwPg",
  authDomain: "harrypotter-ecommerce.firebaseapp.com",
  projectId: "harrypotter-ecommerce",
  storageBucket: "harrypotter-ecommerce.firebasestorage.app",
  messagingSenderId: "835329433262",
  appId: "1:835329433262:web:ef9c90e3dd6593fb10973f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);