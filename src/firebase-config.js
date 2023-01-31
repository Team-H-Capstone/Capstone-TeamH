// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  updateEmail,
  // updateDisplayName,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  update,
  setDoc,
  doc

} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBsIjlxWvMw-tWtRQXPpPx316byIMJg20A',
//   authDomain: 'teamh-capstone.firebaseapp.com',
//   projectId: 'teamh-capstone',
//   storageBucket: 'teamh-capstone.appspot.com',
//   messagingSenderId: '170344461409',
//   appId: '1:170344461409:web:0cd61c18f493bbef562620',
// };

const firebaseConfig = {

  apiKey: "AIzaSyDE9IokUbq006zsbcQ2pQ-i7g6ONSrI7SA",

  authDomain: "teamh-test-tien.firebaseapp.com",

  projectId: "teamh-test-tien",

  storageBucket: "teamh-test-tien.appspot.com",

  messagingSenderId: "1077718509267",

  appId: "1:1077718509267:web:05b49668f2846cf352d626"

};


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // console.log('user created', user)
    await setDoc(doc(db, "users", user.uid), {
      name,
      authProvider: "local",
      email,
    });
    console.log('user auth', auth.currentUser)
    await updateProfile(user,{
      displayName: name,
    })
    await user.reload()
    console.log('user updated', user)
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const auth = getAuth();
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     const userRef = db.collection("users").doc(user.uid);
//     const userDoc = await userRef.get();
//     if (!userDoc.exists) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//       });
//     } else {
//       await userRef.update({ name });
//     }
//     await updateProfile(user,{
//       displayName: name,
//     })
//     await user.reload()
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };


// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
  signOut(auth);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  // sendPasswordReset,
  logout,
};
