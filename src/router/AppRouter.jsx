import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginVotacionPage } from "../module-auth/pages/LoginVotacionPage";
import { AuthRoutes } from "../module-auth/routes/AuthRoutes";
import { HomeRoutes } from "../module-home/routes/HomeRoutes";
import { VotacionRoutes } from "../module-votacion/routes/votacionRoutes";
import { CiudadanoRoutes } from "../routes/CiudadanoRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
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
					<PublicRoutes>
						<AuthRoutes />
					</PublicRoutes>
				}
			/>

			<Route
				path="/*"
				element={
					<PrivateRoutes>
						<VotacionRoutes />
					</PrivateRoutes>
				}
			/>

			{/* <Route path="login" element={<LoginVotacionPage />} /> */}
		</Routes>
	);
};
