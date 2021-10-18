// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJlyoCX63q1ZobmP_bvXQYSYQurCXye2A",
  authDomain: "yt-demo-e028c.firebaseapp.com",
  projectId: "yt-demo-e028c",
  storageBucket: "yt-demo-e028c.appspot.com",
  messagingSenderId: "734593705283",
  appId: "1:734593705283:web:ebca58e9753ae27416bbf6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users')
}

export const storage = firebase.storage()