import { Route, Routes } from "react-router-dom";
import { LoginVotacionPage } from "../pages/LoginVotacionPage";

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={<LoginVotacionPage />} />
		</Routes>
	);
};
