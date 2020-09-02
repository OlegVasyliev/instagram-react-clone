import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAumsQCRuVnNTGRwiIILwOTJul2V1VPQx0",
  authDomain: "instagram-clone-react-80cb8.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-80cb8.firebaseio.com",
  projectId: "instagram-clone-react-80cb8",
  storageBucket: "instagram-clone-react-80cb8.appspot.com",
  messagingSenderId: "23444869984",
  appId: "1:23444869984:web:af322fb742ec293ef3c405",
  measurementId: "G-L38PH41KHK"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };