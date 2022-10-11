import { createContext, useState } from "react";
import SHOP_DATA from "../RestAPI/index" 

export const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {
    const [products]=useState(SHOP_DATA)

    return (
        // notice the products is an object within an object? understand later
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;