import React from "react";
import Nav from "../navigation/Navigation.js"
import ProductDetails from "./product_details/product_details.js";
import "./product.scss";



const Product = () => {
    return (
        <div className="product_page_container">
            <Nav />
            <ProductDetails/>
        </div>
    )
}
export default Product;