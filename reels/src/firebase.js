import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbyyW6nx_nMWXkcsp7DfL5cTZj5M1o8dk",
  authDomain: "reels-839c5.firebaseapp.com",
  projectId: "reels-839c5",
  storageBucket: "reels-839c5.appspot.com",
  messagingSenderId: "235859540876",
  appId: "1:235859540876:web:10b334434e243d32cc34a9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()