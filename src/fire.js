import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbaP8lDRnwwIBUP5runnLORjKia-ZlCRE",
  authDomain: "fir-project-411b1.firebaseapp.com",
  projectId: "fir-project-411b1",
  storageBucket: "fir-project-411b1.appspot.com",
  messagingSenderId: "88731914277",
  appId: "1:88731914277:web:09b14f0d905cdaf4fdafcc"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export default fire;
export {projectFirestore, projectStorage};