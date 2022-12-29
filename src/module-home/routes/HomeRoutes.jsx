import { Route, Routes } from "react-router-dom";
import { PasosPage } from "../../module-auth/pages/PasosPage";
import { HomePage } from "../pages/HomePage";

export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="home" element={<HomePage />} />
			<Route path="pasosVerificacion" element={<PasosPage />} />
		</Routes>
	);
};
