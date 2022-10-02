import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import searchIcon from "../../images/icons/search_icon.png";

import "./navigation.scss";



const Nav = () => {
	const { user, loading } = useContext(UserContext);

	console.log("user in Nav", user);

	const test = () => {
		console.log("Nav  WORKING");
	}

	return (
		<div className="nav_container" >
			<ul className="nav_container-ul">
				<Link onClick={test} to="/shop" className="nav_container-li">
					<li>Shop</li>
				</Link>
			</ul>
			<ul className="nav_container-ul">
				<Link onClick={test} to="/" className="nav_container-li logo">
					<li>Murjan</li>
				</Link>
			</ul>
			<ul className="nav_container-ul">
				<Link onClick={test} to="/" className="nav_container-li">
					<img
						className="search_icon"
						src={`${searchIcon}`}
						alt="search_icon"
					/>
				</Link>
				{!user && (
					<Link onClick={test} to="/sign-in" className="nav_container-li">
						<li>My Account</li>
					</Link>
				)}
				{user && (
					<>
						{user.role === "Subscriber" && (
							<Link onClick={test} to="/user" className="nav_container-li">
								<li>{user.name}</li>
							</Link>
						)}
						{user.role === "admin" && (
							<Link onClick={test} to="/admin" className="nav_container-li">
								<li>{user.name}</li>
							</Link>
						)}
						{/* 	<Link onClick={test} to="/" className="nav_container-li">
							<li onClick={() => auth.signOut()}>Sign out</li>
						</Link> */}
					</>
				)}
				{/* <Link onClick={test} to="/" className="nav_container-li">
					<li>Cart</li>
				</Link> */}
			</ul>
		</div>
	);
};
export default Nav;
