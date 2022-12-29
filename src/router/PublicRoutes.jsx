import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
	const logged = false;
	return !logged ? children : <Navigate to={"/prueba"} />;
};
