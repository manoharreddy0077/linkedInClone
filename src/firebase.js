
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAe9HEgB_aGIaRIeQgYe0N5hVGy6J0zANI",
    authDomain: "linkedin-clone-98da9.firebaseapp.com",
    projectId: "linkedin-clone-98da9",
    storageBucket: "linkedin-clone-98da9.appspot.com",
    messagingSenderId: "397995754582",
    appId: "1:397995754582:web:0df83b03f4f36d3bcda7f7",
    measurementId: "G-008EZRBEWG"
  };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db,firebase };