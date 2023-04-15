
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/storage"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFwqfuU3BiunQLbYJOOXM02EeMMtcWBeQ",
  authDomain: "first-projeckt-d3409.firebaseapp.com",
  projectId: "first-projeckt-d3409",
  storageBucket: "first-projeckt-d3409.appspot.com",
  messagingSenderId: "438714186647",
  appId: "1:438714186647:web:30e982d3f0262e0aaa22d2",
  measurementId: "G-N5N2869SL4"
};

firebase.initializeApp(firebaseConfig);

export default firebase


