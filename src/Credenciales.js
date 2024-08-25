import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFkOYG0dV2FEvrAHOsWnnr8rVs57JODps",
  authDomain: "desoft-project.firebaseapp.com",
  projectId: "desoft-project",
  storageBucket: "desoft-project.appspot.com",
  messagingSenderId: "529479465756",
  appId: "1:529479465756:web:90536e7426519957c498d9",
  measurementId: "G-CNNQ7RY4VZ"
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase); 

export default appFirebase;
