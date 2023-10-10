// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQxd64SU0uoIdbiKFZ2pJ3H63Dwq1ZG-s",
  authDomain: "social-event-management-a795d.firebaseapp.com",
  projectId: "social-event-management-a795d",
  storageBucket: "social-event-management-a795d.appspot.com",
  messagingSenderId: "648981446196",
  appId: "1:648981446196:web:67c8ff4a34eb66317c1461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//exporting the auth
const auth = getAuth(app)

//export auth
export default auth