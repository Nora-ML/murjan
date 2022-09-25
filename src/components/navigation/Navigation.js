import React, { useContext ,useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import searchIcon from "../../images/icons/search_icon.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./navigation.scss";

gsap.registerPlugin(ScrollTrigger);



const Nav = () => {
	const { user, loading } = useContext(UserContext);

	console.log("user in Nav", user);

	const test = () => {
		console.log("Nav  WORKING");
	}

	const mainRef = useRef(null);

	useEffect(() => {
		
		console.log(mainRef)

		gsap.fromTo(mainRef.current, {
			autoAlpha: 0,
			scale:0.9
		}, {
			autoAlpha: 1,
			ease: "none",
			scale:1
		});
	}, [mainRef]);

	return (
		<div className="nav_container"  ref={mainRef}>
			<ul className="nav_container-ul">
				<Link onClick={test} to="/" className="nav_container-li">
					<li>Murjan</li>
				</Link>
				<Link onClick={test} to="/" className="nav_container-li">
					<li>Shop</li>
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
				<Link onClick={test} to="/" className="nav_container-li">
					<li>Cart</li>
				</Link>
			</ul>
		</div>
	);
};
export default Nav;
