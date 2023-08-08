// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChi9oEhfoQHWygDDpQGdkKfLrMVDoRTu0",
  authDomain: "fire-auth-f492c.firebaseapp.com",
  projectId: "fire-auth-f492c",
  storageBucket: "fire-auth-f492c.appspot.com",
  messagingSenderId: "974735443844",
  appId: "1:974735443844:web:4a1920d26b3e4ca67ebfd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth_user = getAuth(app);
export const database_application = getFirestore(app)
export default app
