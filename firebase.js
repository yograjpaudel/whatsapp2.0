import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMMYaHRkljfqU4UilZt0DcVjlmqGNA1KM",
  authDomain: "whatsapp-2-f8866.firebaseapp.com",
  projectId: "whatsapp-2-f8866",
  storageBucket: "whatsapp-2-f8866.appspot.com",
  messagingSenderId: "774602500658",
  appId: "1:774602500658:web:da15e834aec8a7701e6a2b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };