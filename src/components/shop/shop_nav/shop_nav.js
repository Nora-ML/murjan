import React from "react";
import { Link } from "react-router-dom";
import "./shop_nav.scss"

// shopping page requirments:
// 1- filter navigation 
//      -idea (in the main navigation, on page transition the Logo slides to the left and filter)
//      -category, collection
// 2- secondary navigation (gemstone, gold color ),price range filter
// 3- items Layout


const ShopNav = () => {
    return (
        <div className="shop_nav_container">
            <ul className="shop_nav_container-ul">
				<Link  to="/" className="shop_nav_container-li">
					<li>Gemstone</li>
				</Link>
				<Link  to="/" className="shop_nav_container-li">
					<li>Metal</li>
				</Link>
				<Link  to="/" className="shop_nav_container-li">
					<li>Price Range</li>
				</Link>
			</ul>
        </div>
    )
}
export default ShopNav;