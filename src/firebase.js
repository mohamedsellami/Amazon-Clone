import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebasApp = firebase.initializeApp({
    apiKey: "AIzaSyCFGEd3OpSIdjJCXmwQ7cKNGR_C9TMZloY",
    authDomain: "clone-a49c5.firebaseapp.com",
    projectId: "clone-a49c5",
    storageBucket: "clone-a49c5.appspot.com",
    messagingSenderId: "15093843089",
    appId: "1:15093843089:web:488716880d45b3c061ab30",
    measurementId: "G-T21SLN14FW"
});

const auth = firebase.auth();

export { auth };