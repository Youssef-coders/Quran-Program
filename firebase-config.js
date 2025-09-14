// Firebase Configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSOZYCUMqO9KEr9a93GaanxuIelJIIIGM",
    authDomain: "quran-tracker-6a536.firebaseapp.com",
    projectId: "quran-tracker-6a536",
    storageBucket: "quran-tracker-6a536.firebasestorage.app",
    messagingSenderId: "988749694504",
    appId: "1:988749694504:web:91af1972179d797409171d"
};

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export { app };
