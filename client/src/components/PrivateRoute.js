import React, { useContext } from "react";
import { GlobalContext } from "../context/userGlobalState";

const PrivateRoute = ({ component: Component }) => {
	const { isAuthenticated } = useContext(GlobalContext);
	return isAuthenticated ? <Component /> : "please login";
};

export default PrivateRoute;
