import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
	const logged = true;

	return logged ? children : <Navigate to={"/auth/login"} />;
};
