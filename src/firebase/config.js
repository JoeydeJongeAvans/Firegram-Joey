import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD8isqwAtI46aeOTl18pK-yXcBDnAR3jYs",
    authDomain: "joey-firegram.firebaseapp.com",
    databaseURL: "https://joey-firegram.firebaseio.com",
    projectId: "joey-firegram",
    storageBucket: "joey-firegram.appspot.com",
    messagingSenderId: "351672467756",
    appId: "1:351672467756:web:f97bc4891dcb6b2aa72c89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFirestore,
    projectStorage,
    timestamp
};