import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCUxucIyQwuNEzgBLRFexy_mlr4McB5Oa0",
    authDomain: "contact-crud-6ed47.firebaseapp.com",
    databaseURL: "https://contact-crud-6ed47-default-rtdb.firebaseio.com",
    projectId: "contact-crud-6ed47",
    storageBucket: "contact-crud-6ed47.appspot.com",
    messagingSenderId: "392737388033",
    appId: "1:392737388033:web:8082e692ea1c91083bf200",
    measurementId: "G-S044CSJEFC"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default fireDb.database().ref();