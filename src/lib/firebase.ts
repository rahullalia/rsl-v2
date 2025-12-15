// Using Firebase compat SDK to avoid COOP issues with popup auth
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARwWcCWVzDRwvl_mgcv2zSfJwLxmVPthI",
  authDomain: "rsla-tools.firebaseapp.com",
  projectId: "rsla-tools",
  storageBucket: "rsla-tools.firebasestorage.app",
  messagingSenderId: "481375554832",
  appId: "1:481375554832:web:d0b4c6bdbc6d677fd22995",
  measurementId: "G-9W2XXEJQFQ"
};

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth };
