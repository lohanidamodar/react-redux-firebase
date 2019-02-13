import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDn0Vqe8Qo1y7iN2vGYdcHoSq9RZlyX8QE",
    authDomain: "awesome-app-b459c.firebaseapp.com",
    databaseURL: "https://awesome-app-b459c.firebaseio.com",
    projectId: "awesome-app-b459c",
    storageBucket: "awesome-app-b459c.appspot.com",
    messagingSenderId: "845026500609"
  };
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;