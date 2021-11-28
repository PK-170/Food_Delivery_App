import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvZJcZcOb01nhGMYUercjH7Wu-j8zk2is",
    authDomain: "assignment-2-9e153.firebaseapp.com",
    projectId: "assignment-2-9e153",
    storageBucket: "assignment-2-9e153.appspot.com",
    messagingSenderId: "1092628758990",
    appId: "1:1092628758990:web:20132734f2c34f55d22b9f"
  };
  
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
