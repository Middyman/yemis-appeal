import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkI3G-IK7VAgF6sJfZYBUPW-TpByJodPo",
  authDomain: "yemis-appeal.firebaseapp.com",
  projectId: "yemis-appeal",
  storageBucket: "yemis-appeal.appspot.com",
  messagingSenderId: "93177475451",
  appId: "1:93177475451:web:f34cdf5a721d42093f8dde",
  measurementId: "G-RGZR6F5VWE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
