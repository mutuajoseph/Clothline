import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAZpI1hJGVyr0ktuQKYVm6P_XachVAfffk",
    authDomain: "crwndb-4d193.firebaseapp.com",
    databaseURL: "https://crwndb-4d193.firebaseio.com",
    projectId: "crwndb-4d193",
    storageBucket: "crwndb-4d193.appspot.com",
    messagingSenderId: "803322534884",
    appId: "1:803322534884:web:baf979b5c114460aa305f1",
    measurementId: "G-QJ26ZSHN7L"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;