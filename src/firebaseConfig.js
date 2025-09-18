// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importación de Firestore

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDC4uT1eyF_Gkn5bWyjOGPF2d5ruQlPwPg",
  authDomain: "harrypotter-ecommerce.firebaseapp.com",
  projectId: "harrypotter-ecommerce",
  storageBucket: "harrypotter-ecommerce.firebasestorage.app",
  messagingSenderId: "835329433262",
  appId: "1:835329433262:web:ef9c90e3dd6593fb10973f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y lo exporta para que puedas usarlo en otros archivos
export const db = getFirestore(app);