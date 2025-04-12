// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0aPZhicGGbhfFmp8DAnuali_hFk98ANs",
  authDomain: "shopmart-app-41af1.firebaseapp.com",
  projectId: "shopmart-app-41af1",
  storageBucket: "shopmart-app-41af1.firebasestorage.app",
  messagingSenderId: "243085554773",
  appId: "1:243085554773:web:85f7eaa246d76e301550dc",
  measurementId: "G-47W4DVRW1W",
  databaseURL: 'https://shopmart-app-41af1-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);