import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXWZ9TRM3oA1y_5EsMAG2Po3EDcLyQvSQ',
  authDomain: 'portfolio-dashboard-83994.firebaseapp.com',
  projectId: 'portfolio-dashboard-83994',
  storageBucket: 'portfolio-dashboard-83994.appspot.com',
  messagingSenderId: '1097045459466',
  appId: '1:1097045459466:web:14d71aef446833d571d5f3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
