import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { fetchApi } from "../../helpers";
import {
	auth,
	updateProfile,
	createUserWithEmailAndPassword,
} from "../../firebase.js";
import Nav from "../navigation/Navigation";
import { Success, Fail } from "../alerts/alerts.js";
import "./activate_acc.scss";

const Activate = () => {
	console.log("Activate account page");
	const navigate = useNavigate();
	const { id } = useParams();

	var { name, email, password } = jwt_decode(id);

	const [state, setState] = useState({
		buttonText: "Activate",
		success: "",
		fail: "",
		next: "",
	});
	const { buttonText, success, fail, next } = state;

	const submitForm = async (e) => {
		console.log("Submit Form");
		e.preventDefault();
		setState({
			...state,
			buttonText: "Activating..",
			success: "",
			fail: "",
		});
		fetchApi("activate_user", { body: { token: id } })
			.then((response) => {
				console.log("response :", response);
				if (!response || response.error) {
					setState({
						...state,
						buttonText: "Activate",
						fail: response.error,
						success: "",
					});
				} else {
					saveInFirebaseAuth(response.message);
				}
			})
			.catch((error) => {
				console.log("error :", error);
				setState({
					...state,
					buttonText: "Activate",
					fail: "Fail for some reason",
					success: "",
				});
			});
	};

	const saveInFirebaseAuth = async (success) => {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		auth.signOut();
		await updateProfile(user, { displayName: name })
			.then((result) => {
				setState({
					...state,
					buttonText: "Activated !",
					fail: "",
					success: success,
				});
				navigate("/sign-in");
			})
			.catch((error) => {
				console.log("error :", error);
				setState({
					...state,
					buttonText: "Activate",
					fail: "Fail for some reason",
					success: "",
				});
			});
	};

	const SignUpForm = (
		<div className="form_container">
			<h2 className="form_header">Activate your account</h2>
			{success && <Success message={success} />}
			{fail && <Fail message={fail} />}
			<input
				className="form_button"
				onClick={submitForm}
				type="submit"
				value={buttonText}
			/>
		</div>
	);
	return (
		<>
			<Nav />
			<div className="sign-up_page_container">{SignUpForm}</div>
		</>
	);
};

export default Activate;
