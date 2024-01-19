import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCI7S4ETklYdPXcDaosZpri20Z1F2oaiWo",
  authDomain: "master-data-manager-38a47.firebaseapp.com",
  databaseURL: "https://master-data-manager-38a47-default-rtdb.firebaseio.com",
  projectId: "master-data-manager-38a47",
  storageBucket: "master-data-manager-38a47.appspot.com",
  messagingSenderId: "551540369284",
  appId: "1:551540369284:web:aa2db8119fe9dc19c89fd1"
};

firebase.initializeApp(firebaseConfig);
export const firestoreConfig = firebase.firestore();
export const storageConfig = firebase.storage();
export const databaseConfig = firebase.database();
export const authConfig = firebase.auth();