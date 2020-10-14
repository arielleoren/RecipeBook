import firebase from 'firebase';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDFpxLQex8e5w-nsUBLnZpmo_6gU-kPdq4",
    authDomain: "recipebook-b11cd.firebaseapp.com",
    databaseURL: "https://recipebook-b11cd.firebaseio.com",
    projectId: "recipebook-b11cd",
    storageBucket: "recipebook-b11cd.appspot.com",
    messagingSenderId: "898993329511",
    appId: "1:898993329511:web:c15c123607e34cd1ec4bc2",
    measurementId: "G-0Y45G91XQJ"
  };
firebase.initializeApp(config);
export default firebase;