import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/landing";
import SignIn from "./components/sign-in/sign_in";
import SignUp from "./components/sign-up/sign-up";
import UserBoard from "./components/userBoard/user_board";
import AdminBoard from "./components/adminBoard/admin_board";
import { UserRoute, AdminRoute } from "./components/routesAccess";
import Activate from "./components/activateAccount/activate_acc";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route element={<UserRoute />}>
				<Route path="/user" element={<UserBoard />} />
			</Route>
			<Route element={<AdminRoute />}>
				<Route path="/admin" element={<AdminBoard />} />
			</Route>
			<Route path="/activate/:id" element={<Activate />} />
		</Routes>
	);
};

export default App;
