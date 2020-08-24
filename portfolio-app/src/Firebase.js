/*
  Config file for firebase.
  Used for auth
*/

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFJrBNnIRUICA_9USBeEUXoyLKO9AyBxk",
  authDomain: "portfolio-df99c.firebaseapp.com",
  databaseURL: "https://portfolio-df99c.firebaseio.com",
  projectId: "portfolio-df99c",
  storageBucket: "portfolio-df99c.appspot.com",
  messagingSenderId: "184582598071",
  appId: "1:184582598071:web:dfd8993f99e9ee8d70cc32"
};

firebase.initializeApp(firebaseConfig);
export const Auth = firebase.auth();