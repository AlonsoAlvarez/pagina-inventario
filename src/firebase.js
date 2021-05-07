import firebase from "firebase/app"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
  apiKey: "TU CREDENCIAL",
  authDomain: "TU CREDENCIAL",
  projectId: "TU CREDENCIAL",
  storageBucket: "TU CREDENCIAL",
  messagingSenderId: "TU CREDENCIAL",
  appId: "TU CREDENCIAL",
  measurementId: "TU CREDENCIAL"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()