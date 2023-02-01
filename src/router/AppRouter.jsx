import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginVotacionPage } from "../module-auth/pages/LoginVotacionPage";
import { AuthRoutes } from "../module-auth/routes/AuthRoutes";
import { useCheckAuth } from "../module-home/hooks/useCheckAuth";
import { HomeRoutes } from "../module-home/routes/HomeRoutes";
import { VotacionRoutes } from "../module-votacion/routes/votacionRoutes";
import { initAxiosInterceptors } from "../providers/Micro-Auth/configAuth";
import { CiudadanoRoutes } from "../routes/CiudadanoRoutes";
import { onLogin } from "../store/auth/authSlice";
import { AuthPublicRoutes } from "./AuthPublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
	// initAxiosInterceptors();
	// const { status } = useSelector((state) => state.auth);

	const { status } = useCheckAuth();

	const location = useLocation();
	// console.log(location);
	sessionStorage.setItem("Location", location.pathname);

	if (status === "checking") {
		return "CARGANDOOOOOOOOOOOOOOO";
	} else
		return (
			<Routes>
				<Route
					path="/*"
					element={
						<PublicRoutes>
							<CiudadanoRoutes />
						</PublicRoutes>
					}
				/>

				<Route
					path="/auth/*"
					element={
						<AuthPublicRoutes status={status}>
							<AuthRoutes />
						</AuthPublicRoutes>
					}
				/>

				<Route
					path="/votacion/*"
					element={
						<PrivateRoutes status={status}>
							<VotacionRoutes />
						</PrivateRoutes>
					}
				/>
			</Routes>
		);
};
