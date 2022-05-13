import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDFFhUAoxgUqn23NV4ixG2tukjoH0sprUY",
  authDomain: "authen-a18df.firebaseapp.com",
  projectId: "authen-a18df",
  storageBucket: "authen-a18df.appspot.com",
  messagingSenderId: "538298191726",
  appId: "1:538298191726:web:2984c5480668bdbbb13b7f",
  measurementId: "G-Z5JYLGHGKP"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };