import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyApQDke81ww4c6xFM7fT9Se4NOrDFM937I",
    authDomain: "to-do-list-28ba7.firebaseapp.com",
    projectId: "to-do-list-28ba7",
    storageBucket: "to-do-list-28ba7.appspot.com",
    messagingSenderId: "363693681197",
    appId: "1:363693681197:web:10f308cdc69d76bd4e26a4",
    measurementId: "G-EPCH4F8LXN"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();