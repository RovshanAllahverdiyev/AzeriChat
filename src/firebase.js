import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAavsURYxvLChv0jdOMwJuCBGByGuH71FY",
  authDomain: "chat-900ae.firebaseapp.com",
  projectId: "chat-900ae",
  storageBucket: "chat-900ae.appspot.com",
  messagingSenderId: "209004656835",
  appId: "1:209004656835:web:b709dbdee4a05d9bffca76"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();