// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsIjlxWvMw-tWtRQXPpPx316byIMJg20A',
  authDomain: 'teamh-capstone.firebaseapp.com',
  projectId: 'teamh-capstone',
  storageBucket: 'teamh-capstone.appspot.com',
  messagingSenderId: '170344461409',
  appId: '1:170344461409:web:0cd61c18f493bbef562620',
};

console.log('firebase working???',  firebaseConfig);

const user = doc(db, 'users/1');
async function createUser() {
  const userData = {
    name: 'test',
    age: 21,
  };
  try {
    await setDoc(user, userData);
    console.log('this user is added to db');
  } catch (e) {
    console.error('Error adding document: ', e);
    alert('Error adding document: ', e);
  }
}

createUser();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export default db;
