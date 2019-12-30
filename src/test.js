import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// example query to a firebase database
// get the users collection -> specific user id -> get that user's cartItems -> get a specific item in those cartItems
firestore.collection('users').doc('L3RfzMDVaU7iZ9tdFWUt').collection('cartItems').doc('DYJChDmFAzRH6obuJHwE')

// other way to do the above example
firestore.doc('/users/L3RfzMDVaU7iZ9tdFWUt/cartItems/DYJChDmFAzRH6obuJHwE');

// getting the collection of cartItems
firestore.collection('/users/L3RfzMDVaU7iZ9tdFWUt/cartItems');