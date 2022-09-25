import { UserContext } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

export const UserRoute = () => {
	const {
		user: { role },
	} = useContext(UserContext);
	console.log("userRoute role:", role);

	return role === "Subscriber" ? <Outlet /> : <Navigate to="/" />;
};

export const AdminRoute = () => {
	const {
		user: { role },
	} = useContext(UserContext);
	console.log("userRoute role:", role);

	return role === "admin" ? <Outlet /> : <Navigate to="/" />;
};
