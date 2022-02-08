import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCfBcZx7f2o3UOguaU_uAxmpFmYVQNEA1U',
  authDomain: 'crwn-db-a5327.firebaseapp.com',
  projectId: 'crwn-db-a5327',
  storageBucket: 'crwn-db-a5327.appspot.com',
  messagingSenderId: '595393565628',
  appId: '1:595393565628:web:457dfc06170a6f0a5151b9',
  measurementId: 'G-4ZY780NHVN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// --- for google authontication ---- //

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const sighInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
