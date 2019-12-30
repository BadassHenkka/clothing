// firebase utility methods

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAG5fC5dsFd6ONrp8yNcdYz1BewxsRCaYg",
    authDomain: "crwn-db-eaa25.firebaseapp.com",
    databaseURL: "https://crwn-db-eaa25.firebaseio.com",
    projectId: "crwn-db-eaa25",
    storageBucket: "crwn-db-eaa25.appspot.com",
    messagingSenderId: "416429264845",
    appId: "1:416429264845:web:f4899f5c9a313bf3907e84",
    measurementId: "G-EG77BRYL15"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;