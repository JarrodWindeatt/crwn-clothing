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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user',error.message);
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
