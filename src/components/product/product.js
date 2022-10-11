import React from "react";
import Nav from "../navigation/Navigation.js"
import ProductDetails from "./product_details/product_details.js";
import ProductImages from "./product_image/product_image.js";
import Detailed from "./detailed/detailed.js";
import "./product.scss";



const Product = () => {
    return (
        <div className="product_page_container">
            <Nav classN={"trans"} />
            <div className="product_detail_page_container">
                <ProductDetails />
                <ProductImages/>
            </div>
            <Detailed/>
        </div>
    )
}
export default Product;