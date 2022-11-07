import React, { useState, createContext, useEffect, useRef } from "react";
import { auth, onAuthStateChanged } from "../firebase";
import { gsap } from "gsap";
//import HeadAnim from "../components/headeranim/header_anim";
import { useLocation } from "react-router-dom";
import { fetchApi } from "../helpers";

import "./loading.scss";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [state, setState] = useState({ user: "", loading: true });
	const { user, loading } = state;
	const location = useLocation();

	useEffect(() => {
		const subscribe = onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				const { role } = await fetchApi("role", {
					body: { email: userAuth.email },
				});
				if (role) {
					setState({
						...state,
						user: {
							id: userAuth.uid,
							name: userAuth.displayName,
							email: userAuth.email,
							role: role,
						},
						loading: false,
					});
				}
			} else {
				setState({ ...state, user: "", loading: false });
			}
		});

		return () => subscribe();
	}, []);

	/* 	const text = "Murjan";
	const array = [];

	const rootz = useRef();
	for (let i = 0; i < text.length; i++) {
		if (text[i] === " ") {
			array.push("&nbsp;");
		} else {
			array.push([text[i]]);
		}
	}
	useEffect(() => {
		let ctx = gsap.context(() => {
			array.forEach((item, i) => {
				gsap.to(`.char${i}`, {
					translateY: "0px",
					ease: "power3.inOut",
					delay: i * 0.2,
				});
				gsap.fromTo(
					".text",
					{ clipPath: "inset(0% 0% 100% 0%)" },
					{ clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }
				);

				gsap.fromTo(rootz.current, { yPercent: 0 }, { yPercent: -50 }, ">");
			});
		}, rootz);

		setTimeout(() => {
			setState({ ...state, loading: false });
		}, 2000);

		return () => ctx.revert();
	}, []);

	if (loading && location.pathname === "/") {
		return (
			<>
				<div ref={rootz} className="text-container">
					<div className="text">
						{array.map((item, i) => (
							<h1 className={`char${i}`}>
								{item === "&nbsp;" ? <h1>&nbsp;</h1> : item}{" "}
							</h1>
						))}
					</div>
				</div>
			</>
		);
	} */

	return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
