import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./base.css";
import firebase from 'firebase'
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCgaiiN3AW8SIWsBv4_GXTPg_nE0zafsds",
  authDomain: "chat-react-db5b4.firebaseapp.com",
  projectId: "chat-react-db5b4",
  storageBucket: "chat-react-db5b4.appspot.com",
  messagingSenderId: "904072768968",
  appId: "1:904072768968:web:15eb2088ed83199da824fd",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,

  document.getElementById("root")
);
