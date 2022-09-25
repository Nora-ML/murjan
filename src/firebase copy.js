import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	getDocs,
	setDoc,
	onSnapshot,
	query,
	where,
	collection,
} from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
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
const db = getFirestore(app);
const auth = getAuth(app);

const createUser = async (userAuth, additionalData) => {
	console.log("firebase, createUser userAuth:", userAuth);
	if (!userAuth) return "";
	let userRef = doc(db, "users", userAuth.uid);
	const snapShot = await getDoc(userRef);

	if (!snapShot.exists()) {
		const { name, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userRef, {
				name,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			return "Error creating user";
		}
	}

	return userRef;
};
const newUser = async (email) => {
	console.log("firebase, createUser ");

	if (!email) return "";
	const userRef = query(collection(db, "users"), where("email", "==", email));
	const snapShot = await getDocs(userRef);

	console.log("snapshot:", snapShot);
	if (snapShot.empty) {
		return true;
	} else {
		return false;
	}
};

export {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	createUser,
	onAuthStateChanged,
	onSnapshot,
	newUser,
};
