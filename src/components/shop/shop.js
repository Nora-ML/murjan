import React from "react";
import Nav from "../navigation/Navigation.js"
import ShopHero from "./shop_hero/shop_hero";
import ShopNav from "./shop_nav/shop_nav.js";
import ShopItems from "./shop_items/shop_items";
import "./shop.scss";


// shopping page requirments:
// 1- filter navigation 
//      -idea (in the main navigation, on page transition the Logo slides to the left and filter)
//      -category, collection
// 2- secondary navigation (gemstone, gold color ),price range filter
// 3- items Layout


const Shop = () => {
    console.log("Shop page");
    return (

        <div className="shop_page_container">
                <Nav/>   
                <ShopHero />
                <ShopNav/>
                <ShopItems/>
        </div>
    )
}
export default Shop;