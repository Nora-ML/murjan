import React, { useContext, useEffect} from "react";
import { Link,useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import searchIcon from "../../images/icons/search_icon.png";
import { auth } from "../../firebase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./navigation.scss";

gsap.registerPlugin(ScrollTrigger);


const Nav = ({ classN }) => {
	const { user, loading } = useContext(UserContext);

	const location = useLocation();
	console.log("user in Nav", user);
	console.log("location", location);

	useEffect(() => {
		const tl = gsap.timeline({});
		if (location.pathname.includes("shop")) {
			// flipping shop to cart and favourites
			tl.fromTo(".shop-remove", { yPercent: 0 }, { yPercent: -170 }, 0.5);
			tl.fromTo(
				".first-2",
				{ yPercent: 0 },
				{ opacity: 1, yPercent: -110 },
				0.6
			);

			// shrinking the whole nav container
			const navHeight = gsap.getProperty(".nav_container", "height");

			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".shop_dropdown-container",
					toggleActions: "play play none reverse",
					//	markers: true,
					start: "top top+=5%",
				},
				height: navHeight / 2,
				ease: "none",
				duration: 1,
			});
		}
		if (location.pathname === "/") {
			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".post_hero-container",
					start: "top+=20% top",
					//markers: true,
					end: "bottom top",
					toggleActions: "play play none reverse",
				},
				backgroundColor: "#e6ccb2",
			});
			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".gem_color-container",
					start: "top top+=10%",
					//markers: true,
					end: "bottom",
					toggleActions: "play play none reverse",
				},
				backgroundColor: "transparent",
			});
			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".category_main_container",
					start: "top+=5% top+=5%",
					//markers: true,
					end: "bottom",
					//toggleActions: "play play none reverse",
					scrub: 0.1,
				},
				yPercent: -100,
				duration: 0.5,
				ease: "none",
			});
		}
	}, []);

	return (
		<div className={`nav_container ${classN}`}>
			<ul className="nav_container-ul first">
				<Link to="" className="nav_container-li shop-remove">
					<li>Shop</li>
				</Link>
				<ul className="nav_container-ul first-2">
					<Link to="/" className="nav_container-li shop-nav">
						<li>Cart</li>
					</Link>
					<Link to="/" className="nav_container-li shop-nav">
						<li>favourites</li>
					</Link>
				</ul>
			</ul>
			<ul className="nav_container-ul middle">
				<Link to="/" className="nav_container-li logo">
					<li>Murjan</li>
				</Link>
			</ul>
			<ul className="nav_container-ul last">
				<Link to="/" className="nav_container-li">
					<img
						className="search_icon"
						src={`${searchIcon}`}
						alt="search_icon"
					/>
				</Link>
				{!user && (
					<Link to="" className="nav_container-li">
						<li>My Account</li>
					</Link>
				)}
				{user && (
					<>
						{user.role === "Subscriber" && (
							<Link to="/user" className="nav_container-li">
								<li>{user.name}</li>
							</Link>
						)}
						{user.role === "admin" && (
							<Link to="/admin" className="nav_container-li">
								<li>{user.name}</li>
							</Link>
						)}
						<Link to="/" className="nav_container-li">
							<li onClick={() => auth.signOut()}>Sign out</li>
						</Link>
					</>
				)}
			</ul>
		</div>
	);
};
export default Nav;
