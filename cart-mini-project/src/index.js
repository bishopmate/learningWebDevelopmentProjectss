import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAKF_Ek4QID5nTgY7E4ovoKGiD9n0aslcY",
  authDomain: "cart-mini-project.firebaseapp.com",
  projectId: "cart-mini-project",
  storageBucket: "cart-mini-project.appspot.com",
  messagingSenderId: "502571836111",
  appId: "1:502571836111:web:194d025534d6722e5c8dba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

