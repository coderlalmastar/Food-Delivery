import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTfigHwbEFblxFjBlX5-CBDmWLYrXt7is",
  authDomain: "fooddelivery-ae36c.firebaseapp.com",
  databaseURL: "https://fooddelivery-ae36c-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-ae36c",
  storageBucket: "fooddelivery-ae36c.appspot.com",
  messagingSenderId: "670704232000",
  appId: "1:670704232000:web:de3a65d0eeb6a943b3e1a5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};