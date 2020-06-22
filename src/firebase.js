import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



//firebase create
var firebaseConfig = {
    apiKey: "AIzaSyCrikFEHbynKXsP92dPQt_KVo-KvJkvBh4",
    authDomain: "react-slack-clone-7c4ac.firebaseapp.com",
    databaseURL: "https://react-slack-clone-7c4ac.firebaseio.com",
    projectId: "react-slack-clone-7c4ac",
    storageBucket: "react-slack-clone-7c4ac.appspot.com",
    messagingSenderId: "4380090561",
    appId: "1:4380090561:web:aa2420f154b6988c9af440",
    measurementId: "G-9DMNJJ5QY0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;