import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBhuCNhhPbUtKC17G_I2z5PxJ4aGsLZpvI",
  authDomain: "lynchboxd-website.firebaseapp.com",
  projectId: "lynchboxd-website",
  storageBucket: "lynchboxd-website.appspot.com",
  messagingSenderId: "927290327257",
  appId: "1:927290327257:web:77bc8838690775f90f7ec8",
  measurementId: "G-ZZ3B3LXRCC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);