import React, { useContext } from "react";
import Nav from "../navigation/Navigation";
import { UserContext } from "../../context/userContext";
import { fetchApi } from "../../helpers";
import background from "../../images/Foundationchain_gold_thick.png";
import background1 from "../../images/HG-bracelet-Chubby_stone_inlay-1.png";
import background2 from "../../images/stardust_pendantnecklace_smallrev.png";
import background3 from "../../images/tennisnecklace_wide1_4a143466-cc04-4d93-b050-60bcf0633fd4.png";
import "./user_board.scss";

const UserBoard = () => {
	console.log("User board page");
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

	const dashboard = () => {
		return (
			<div className="dashboard_container_overview">
				<div className="dashboard_left">
					<div className="cards dashboard_left_up">
						<h4 className="main_card_headers">Price drops</h4>
					</div>
					<div className="cards dashboard_left_center">
						<h4 className="main_card_headers">Orders</h4>
						<div className="order_options_wrapper">
							<div className="order_option">All</div>
							<div className="order_option">Processing</div>
							<div className="order_option">Shipped</div>
							<div className="order_option">Completed</div>
						</div>
					</div>
					<div className="cards dashboard_left_down">
						<h4 className="main_card_headers">Orders</h4>
						<div className="order_options_wrapper">
							<div className="order_option">All</div>
							<div className="order_option">Processing</div>
							<div className="order_option">Shipped</div>
							<div className="order_option">Completed</div>
						</div>
					</div>
				</div>
				<div className="dashboard_center">
					<div className="cards dashboard_center_up">
						<h4 className="main_card_headers">User</h4>
					</div>
					<div className="cards dashboard_center_down special_green_background">
						<h4 className="main_card_headers">Commands</h4>
						<div className="commands_options_wrapper">
							<div className="commands_option">
								<p>Orders</p>
							</div>
							<div className="commands_option">
								<p>Favourites</p>
							</div>
							<div className="commands_option">
								<p>Returns and Refunds</p>
							</div>
							<div className="commands_option">
								<p>purchases and Reviews</p>
							</div>
							<hr className="horizontal-line" />
							<div className="commands_option">
								<p>Shipped</p>
							</div>
							<div className="commands_option">
								<p>Completed</p>
							</div>
						</div>
					</div>
				</div>
				<div className="cards dashboard_right special_green_background">
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background})`,
						}}
					></div>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background1})`,
						}}
					></div>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background2})`,
						}}
					></div>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background1})`,
						}}
					></div>

					<h4 className="main_card_headers">Favourites</h4>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background3})`,
						}}
					></div>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background2})`,
						}}
					></div>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background2})`,
						}}
					></div>
					<div
						className="favourites_image"
						style={{
							backgroundImage: `url(${background3})`,
						}}
					></div>
				</div>
			</div>
		);
	};

	return (
		<>
			<Nav />
			{dashboard()}
		</>
	);
};

export default UserBoard;
