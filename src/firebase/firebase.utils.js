// SETTING UP FIREBASE AND ITS UTILITY METHODS

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// basic firebase config object from firebase project settings
// public apiKey is fine in this case
const config = {
  apiKey: 'AIzaSyAG5fC5dsFd6ONrp8yNcdYz1BewxsRCaYg',
  authDomain: 'crwn-db-eaa25.firebaseapp.com',
  databaseURL: 'https://crwn-db-eaa25.firebaseio.com',
  projectId: 'crwn-db-eaa25',
  storageBucket: 'crwn-db-eaa25.appspot.com',
  messagingSenderId: '416429264845',
  appId: '1:416429264845:web:f4899f5c9a313bf3907e84',
  measurementId: 'G-EG77BRYL15',
};

// We take the user auth object we got from firebase auth
// (when user signs in) and store it inside our database.
// This function is used in App.js in componentDidMount.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // userRef gets us the user reference at this location...
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // ... then we get a snapshot which we'll use
  // to see if there's actually real data - ie. have we already
  // stored this user we got from the userAuth object.
  const snapShot = await userRef.get();

  // if there's no data (!null.exists = true), then get name, email and time
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // then try to set these to our firestore database
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Initializing firebase with our config object
firebase.initializeApp(config);

// Setting firebase's auth and firestore methods into constants
// and exporting them so we can use them in App.js for user auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up for Google sign in pop up that is used
// in the sign-in component
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
