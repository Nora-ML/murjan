import { auth } from "./firebase";

export const fetchApi = async (endpoint, payload) => {
	const server = process.env.REACT_APP_SERVER;
	const user = auth.currentUser;
	const token = user && (await user.getIdToken());
	const { method, body } = { method: "POST", body: null, ...payload };
	console.log("body:", body);
	try {
		const res = await fetch(`${server}/${endpoint}`, {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			...(body && { body: JSON.stringify(body) }),
		});

		return res.json();
	} catch (error) {
		console.log("Fetch API error:", error);
		return { error: error };
	}
};
