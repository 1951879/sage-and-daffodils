import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyByP1PSB5ZITZipCEZow5tYkgoTD6tA2bY",
  authDomain: "sage-and-daffodil.firebaseapp.com",
  databaseURL: "https://sage-and-daffodil.firebaseio.com",
  projectId: "sage-and-daffodil",
  storageBucket: "sage-and-daffodil.appspot.com",
  messagingSenderId: "822957332922",
  appId: "1:822957332922:web:0393a9e2c0f1cdf3292583",
  measurementId: "G-KSFY7DVHRX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

