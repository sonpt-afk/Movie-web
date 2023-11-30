import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwYkXGltj7bkRObfIDtC0ekqaERXTwtqs",
  authDomain: "netflix-clone-byson.firebaseapp.com",
  projectId: "netflix-clone-byson",
  storageBucket: "netflix-clone-byson.appspot.com",
  messagingSenderId: "84499274459",
  appId: "1:84499274459:web:761983d9def2187bb08afe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
