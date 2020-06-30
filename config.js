import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAt6v-vHDGKeKxN2dAyrZdyTxouuBYv3N4",
  authDomain: "booksanta-11efb.firebaseapp.com",
  databaseURL: "https://booksanta-11efb.firebaseio.com",
  projectId: "booksanta-11efb",
  storageBucket: "booksanta-11efb.appspot.com",
  messagingSenderId: "526531252101",
  appId: "1:526531252101:web:ed0f0176b4ace44bee7eec"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
