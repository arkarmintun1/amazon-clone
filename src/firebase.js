import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDUkS6LxUo271ljdQbXmrsSkkWGYwohT5o',
  authDomain: 'clone-7bed9.firebaseapp.com',
  databaseURL: 'https://clone-7bed9.firebaseio.com',
  projectId: 'clone-7bed9',
  storageBucket: 'clone-7bed9.appspot.com',
  messagingSenderId: '1022409325684',
  appId: '1:1022409325684:web:a319d671ba521da2116521',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
