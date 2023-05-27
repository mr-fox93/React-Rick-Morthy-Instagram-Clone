import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYF8XKjnYzVYP602lOopwercrhAh7_y6U",
  authDomain: "insta-797a5.firebaseapp.com",
  projectId: "insta-797a5",
  storageBucket: "insta-797a5.appspot.com",
  messagingSenderId: "434107926354",
  appId: "1:434107926354:web:9da57a7b8bc6c98e0c5c8b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
