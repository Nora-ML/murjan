import React, { useState, createContext, useEffect } from "react";
import { auth, onAuthStateChanged } from "../firebase";
import { fetchApi } from "../helpers";
import "./loading.scss";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [state, setState] = useState({ user: "", loading: true });
	const { user, loading } = state;

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

	if (loading) {
		return (
			<>
				<div className="loading-wrapper">
					<h1 className="loading">"Loading ..."</h1>
				</div>
			</>
		);
	}

	return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
