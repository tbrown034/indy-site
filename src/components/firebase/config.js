// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwTxkgTpiik8WH4bZ7apnWftbJEKqS2A0",
  authDomain: "indy-site.firebaseapp.com",
  projectId: "indy-site",
  storageBucket: "indy-site.appspot.com",
  messagingSenderId: "302518158879",
  appId: "1:302518158879:web:99d7fe7528ed523f2e772a",
  measurementId: "G-MDZY8QNWHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export {analytics, storage, firestore}
