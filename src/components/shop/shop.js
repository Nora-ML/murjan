import React from "react";
import Nav from "../navigation/Navigation.js"
import ShopNav from "./shop_nav/shop_nav";
import ShopItems from "./shop_items/shop_items";
import "./shop.scss";


// shopping page requirments:
// 1- filter navigation 
//      -idea (in the main navigation, on page transition the Logo slides to the left and filter)
//      -category, collection
// 2- secondary navigation (gemstone, gold color ),price range filter
// 3- items Layout


const Shop = () => {
    return (
        <div className="shop_page_container special_blush">
             <Nav/>
            {/*<ShopNav/> */}
            <ShopItems/>
        </div>
    )
}
export default Shop;