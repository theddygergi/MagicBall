import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAq1rjr0KEpTGDirC90_6AwHiq8UEbkkGk",
  authDomain: "magicball-f02f1.firebaseapp.com",
  databaseURL: "https://magicball-f02f1-default-rtdb.firebaseio.com",
  projectId: "magicball-f02f1",
  storageBucket: "magicball-f02f1.appspot.com",
  messagingSenderId: "256243215884",
  appId: "1:256243215884:web:20f9f477d651987bb50829",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
