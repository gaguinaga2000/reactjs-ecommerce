import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBW36JHUG9ELIlJboat2WLmLvcQm2k2Hb0',
  authDomain: 'crown-db-7f26a.firebaseapp.com',
  databaseURL: 'https://crown-db-7f26a.firebaseio.com',
  projectId: 'crown-db-7f26a',
  storageBucket: 'crown-db-7f26a.appspot.com',
  messagingSenderId: '290200077194',
  appId: '1:290200077194:web:fbf854c0ea75e4eb25fe73'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
