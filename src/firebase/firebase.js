//import * as firebase from 'firebase'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAODuOpu9j_iRo8Sjv5yiHMAsyL7WT5kC8",
    authDomain: "expensify-76e4f.firebaseapp.com",
    projectId: "expensify-76e4f",
    storageBucket: "expensify-76e4f.appspot.com",
    messagingSenderId: "334318004554",
    appId: "1:334318004554:web:77904f0a67bdef986039b3",
    measurementId: "G-NG7ZZ6991L"
};

firebase.initializeApp(firebaseConfig); 

const database = firebase.database()

export {firebase, database as default }
