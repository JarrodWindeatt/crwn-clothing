import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6EPA0Y6XURsGWK3sGSsLpUsuz8hWtERo",
    authDomain: "crwn-db-9bd5f.firebaseapp.com",
    databaseURL: "https://crwn-db-9bd5f.firebaseio.com",
    projectId: "crwn-db-9bd5f",
    storageBucket: "crwn-db-9bd5f.appspot.com",
    messagingSenderId: "711171557203",
    appId: "1:711171557203:web:33fad20c76de688af383a6",
    measurementId: "G-ZMWVRJN9YM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
