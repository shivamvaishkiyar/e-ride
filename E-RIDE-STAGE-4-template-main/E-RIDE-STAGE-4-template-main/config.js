import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyAPAQu1MHTncAubGOX1q39wxcepe_B2qgg",
  authDomain: "e-ride-86a15.firebaseapp.com",
  projectId: "e-ride-86a15",
  storageBucket: "e-ride-86a15.appspot.com",
  messagingSenderId: "237307077608",
  appId: "1:237307077608:web:00da3f232a38fffdbefa5d"
};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


