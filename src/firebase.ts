import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0q4QiB8a_7nUkqBb5LnVwJLu34KMmhcE",
  authDomain: "dashboard-f0f7b.firebaseapp.com",
  databaseURL: "https://dashboard-f0f7b-default-rtdb.firebaseio.com",
  projectId: "dashboard-f0f7b",
  storageBucket: "dashboard-f0f7b.appspot.com",
  messagingSenderId: "769801425490",
  appId: "1:769801425490:web:5f8a42b422dd1d4d0d458b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;