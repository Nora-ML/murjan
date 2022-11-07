import { UserContext } from "../context/userContext";
import { ProductContext } from "../context/productContext";
import PreLoader from "./landing/pre_loader/pre_loader";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect } from "react";

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

