
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCV1bLRHlJ7zSnhx_jX7FWRILCQfgAFCVY",
  authDomain: "medtrail-8e6a1.firebaseapp.com",
  projectId: "medtrail-8e6a1",
  storageBucket: "medtrail-8e6a1.appspot.com",
  messagingSenderId: "432310239119",
  appId: "1:432310239119:web:c841f40d93f45d6357d5fa"
};


 const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app)

