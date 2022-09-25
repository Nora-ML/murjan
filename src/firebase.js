import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA0fOB4sowYlLq2cU6yKJN0f47vyCFIeWQ",
	authDomain: "murjan-1c310.firebaseapp.com",
	projectId: "murjan-1c310",
	storageBucket: "murjan-1c310.appspot.com",
	messagingSenderId: "636547680751",
	appId: "1:636547680751:web:343d23994eb385df9d8e1a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
};
