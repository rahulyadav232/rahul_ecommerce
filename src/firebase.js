import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJCtTogjr_ICVKs45IGyS3gcZ6IXE84io",
  authDomain:  "signin-8dd10.firebaseapp.com",
  projectId: "signin-8dd10",
  storageBucket: "signin-8dd10.firebasestorage.app",
  messagingSenderId:  "1096336626659",
  appId: "1:1096336626659:web:24d3dae93f654cbbd446d6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
