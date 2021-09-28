import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCriUGacc50BSMBempcQxMIl2bULqhI9r4",
  authDomain: "eclecticarts-51847.firebaseapp.com",
  databaseURL:
    "https://eclecticarts-51847-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eclecticarts-51847",
  storageBucket: "eclecticarts-51847.appspot.com",
  messagingSenderId: "358688637134",
  appId: "1:358688637134:web:a64715be224ec4f82e909f",
  measurementId: "G-JZ9XPV7DSG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
