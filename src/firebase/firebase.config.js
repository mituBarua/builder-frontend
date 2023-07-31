
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxSO7gLQKQS5S2vHLZF77SMJSwwuMEXD0",
  authDomain: "nextauth-c92ea.firebaseapp.com",
  projectId: "nextauth-c92ea",
  storageBucket: "nextauth-c92ea.appspot.com",
  messagingSenderId: "1042834486437",
  appId: "1:1042834486437:web:a916afa3b13b0a8590494c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;