import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { LoginVotacionPage } from "../module-auth/pages/LoginVotacionPage";
import { AuthRoutes } from "../module-auth/routes/AuthRoutes";
import { HomeRoutes } from "../module-home/routes/HomeRoutes";
import { ResultadosRoutes } from "../module-resultados/routes/Resultados.routes";
import { VotacionRoutes } from "../module-votacion/routes/votacionRoutes";
import { CiudadanoRoutes } from "../routes/CiudadanoRoutes";
import { onLogin } from "../store/auth/authSlice";
import { AuthPublicRoutes } from "./AuthPublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	// dispatch(onLogin({ uid: "DEFAULT", email: "DEAFAULT", displayName: "DEFAULT" }));

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
			<Route
				path="/resultados/*"
				element={
					<PublicRoutes>
						<ResultadosRoutes />
					</PublicRoutes>
					
					
				}
			/>
		</Routes>
	);
};