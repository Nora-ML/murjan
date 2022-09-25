import React, { useContext } from "react";
import Nav from "../navigation/Navigation";
import { UserContext } from "../../context/userContext";
import { fetchApi } from "../../helpers";
import "./admin_board.scss";

const AdminBoard = () => {
	console.log("Admin board page");
	const { user, loading } = useContext(UserContext);

	const getCart = () => {
		fetchApi("user/cart", { method: "GET" })
			.then((response) => {
				console.log("fetch cart response:", response);
			})
			.catch((error) => {
				console.log("fetch cart error:", error);
			});
	};

	return (
		<>
			<Nav />
			<h1>Admin BOARD</h1>
			<h1 onClick={getCart}>"Cart"</h1>
			<h1>{user.role}</h1>
			<h1>{user.email}</h1>
		</>
	);
};

export default AdminBoard;
