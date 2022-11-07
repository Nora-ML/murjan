import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContextProvider from "./context/userContext";
import FilterContextProvider from './context/filterContext';
import ProductContextProvider from './context/productContext';
import SizeContextProvider from "./context/sizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ProductContextProvider>
			<UserContextProvider>
				<FilterContextProvider>
					<SizeContextProvider>
						<App />
					</SizeContextProvider>
				</FilterContextProvider>
			</UserContextProvider>
		</ProductContextProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
