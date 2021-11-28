import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import FirebaseConfig from './firebaseconfig'

firebase.initializeApp(FirebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth,db};