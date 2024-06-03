
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"// for authentication services
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB40YvIR6UQqVG94K-z-bNFjdPG41bhnJk",
  authDomain: "clone-c8893.firebaseapp.com",
  projectId: "clone-c8893",
  storageBucket: "clone-c8893.appspot.com",
  messagingSenderId: "829584219591",
  appId: "1:829584219591:web:6237c50e5b4a3bfd0acde2"
}; 

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore()