import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../helpers.js";
import { newUser } from "../../firebase.js";
import Nav from "../navigation/Navigation";
import { Success, Fail } from "../alerts/alerts.js";
import "./sign_up.scss";

const SignUp = () => {
	console.log("Sign-Up page");
	const navigate = useNavigate();

	const [state, setState] = useState({
		name: "nora",
		email: "noram0161@gmail.com",
		password: "noranora",
		buttonText: "Sign Up",
		success: "",
		fail: "",
	});
	const { name, email, password, buttonText, success, fail } = state;

	const handleChange = (name) => (e) => {
		console.log("Handle change");
		setState({ ...state, [name]: e.target.value });
	};

	const submitForm = async (e) => {
		console.log("Submit Form");
		e.preventDefault();
		setState({
			...state,
			buttonText: "Signinng up",
			success: "",
			fail: "",
		});
		newUser(email)
			.then((resolved) => {
				fetchApi("activation_mail", { body: { email, name, password } })
					.then((response) => {
						console.log("fetched response:", response);
						if (response.error || !response) {
							console.log("fetched response response.error:", response.error);
							setState({
								...state,
								buttonText: "Sign Up",
								success: "",
								fail: response.error,
							});
						} else {
							console.log("fetched response response.error:", response);
							setState({
								...state,
								name: "",
								email: "",
								password: "",
								success: response.message,
								fail: "",
								buttonText: "Signed Up !",
							});
						}
					})
					.catch((error) => {
						console.log("Error fetching response from API:", error);
					});
			})
			.catch((error) => {
				console.log("Error submitting sign Up form error:", error);
				setState({
					...state,
					buttonText: "Sign Up",
					fail: "Email already registered.",
					success: "",
				});
			});
	};

	const SignUpForm = (
		<div className="form_container">
			<h2 className="form_header">Sign-Up</h2>
			{success && <Success message={success} />}
			{fail && <Fail message={fail} />}
			<form className="form_form" onSubmit={submitForm}>
				<input
					className="form_inputs"
					type="name"
					value={name}
					placeholder="Name.."
					name="name"
					onChange={handleChange("name")}
				/>
				<input
					className="form_inputs"
					type="email"
					value={email}
					placeholder="Email.."
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
				<input className="form_button" type="submit" value={buttonText} />
			</form>
		</div>
	);
	return (
		<>
			<Nav />
			<div className="sign-up_page_container">{SignUpForm}</div>
		</>
	);
};

export default SignUp;
