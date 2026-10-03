"use client";
import { createContext, useEffect, useReducer, useState } from "react";
import { sumItems } from "./cartReducer";
import cartReducer from "./cartReducer";

export const CartContext = createContext();

// Server and first client render both start empty; the stored cart loads after
// mount so hydration matches.
const initialState = { cartItems: [], ...sumItems([]) };

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	const [inCart, setInCart] = useState(false);

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			dispatch({ type: "HYDRATE", payload: { items: JSON.parse(storedCart) } });
		}
	}, []);

	const addToCart = (product) =>
		dispatch({ type: "ADD_ITEM", payload: product });

	const addMore = (product) => dispatch({ type: "INCREASE", payload: product });
	const decreaseQuantity = (id) => dispatch({ type: "DECREASE", payload: id });
	const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

	console.log("CART_CONTEXT FINAL-STATE", state);

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				addMore,
				inCart,
				setInCart,
				removeFromCart,
				decreaseQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
