
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABZgo03_rATqbYRIuoMvZ1EUiTnx4Sn8g",
  authDomain: "administrador-cuentas.firebaseapp.com",
  projectId: "administrador-cuentas",
  storageBucket: "administrador-cuentas.appspot.com",
  messagingSenderId: "18499479732",
  appId: "1:18499479732:web:2a06fb65a2e176ad8f8fe1"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, storage, db };