
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNW4MeGDnxei4DmY6cmmcwvJ_v4Rc6tio",
  authDomain: "harsh-auth-55d93.firebaseapp.com",
  projectId: "harsh-auth-55d93",
  storageBucket: "harsh-auth-55d93.appspot.com",
  messagingSenderId: "999963401619",
  appId: "1:999963401619:web:7e919c5195016e59c4dc66",
  measurementId: "G-679PG537MY"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;