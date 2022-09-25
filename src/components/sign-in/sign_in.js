import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase.js";
import Nav from "../navigation/Navigation";
import { Success, Fail } from "../alerts/alerts.js";
import "./sign_in.scss";

const SignIn = () => {
	console.log("Sign-in page");
	const navigate = useNavigate();

	const [state, setState] = useState({
		email: "noram0161@gmail.com",
		password: "noranora",
		buttonText: "Sign In",
		success: "",
		fail: "",
	});
	const { email, password, buttonText, success, fail } = state;

	const handleChange = (name) => (e) => {
		setState({ ...state, [name]: e.target.value });
	};

	const submitForm = async (e) => {
		console.log("Submit Form");
		e.preventDefault();
		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);

			if (user) {
				setState({
					...state,
					email: "",
					password: "",
					buttonText: "Signed In",
				});
				navigate("/");
			}
		} catch (error) {
			console.log("Error signing in error", error.message);
			const err = error.message
				.split("/")[1]
				.replaceAll("-", " ")
				.split(").")[0];
			setState({ ...state, buttonText: "Sign In", fail: `Error : ${err}` });
		}
	};

	const signInForm = (
		<div className="form_container">
			<h2 className="form_header">Sign-In</h2>
			{success && <Success message={success} />}
			{fail && <Fail message={fail} />}
			<form className="form_form">
				<input
					className="form_inputs"
					type="email"
					value={email}
					placeholder="Email"
					name="email"
					onChange={handleChange("email")}
				/>
				<input
					className="form_inputs"
					type="password"
					placeholder="Password.."
					value={password}
					name="password"
					onChange={handleChange("password")}
				/>
			</form>
			<div className="form_actions">
				<p className="form_forgotPass">Forgot Password?</p>
				<input
					className="form_button"
					onClick={submitForm}
					type="submit"
					value={buttonText}
				/>
			</div>
			<p className="form_others">
				Don't have an account ? <Link to="/sign-up"> Signup</Link>
			</p>
		</div>
	);
	return (
		<>
			<Nav />
			<div className="sign-in_page_container">{signInForm}</div>
		</>
	);
};

export default SignIn;
