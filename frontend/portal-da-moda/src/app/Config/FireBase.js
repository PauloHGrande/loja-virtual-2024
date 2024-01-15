import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU7WMksg_pjC6PpXZ4s-WrNNALSo6Qf_g",
  authDomain: "portal-da-moda.firebaseapp.com",
  projectId: "portal-da-moda",
  storageBucket: "portal-da-moda.appspot.com",
  messagingSenderId: "921544786946",
  appId: "1:921544786946:web:963b4a0b49869bade9931b"
};

const app = initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const db = getFirestore(app);

export default app;
