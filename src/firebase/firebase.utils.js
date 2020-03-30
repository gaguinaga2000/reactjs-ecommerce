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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
