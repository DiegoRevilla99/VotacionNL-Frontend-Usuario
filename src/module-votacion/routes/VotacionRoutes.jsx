import { Route, Routes } from "react-router-dom";
import { Prueba } from "../pages/Prueba";

export const VotacionRoutes = () => {
	return (
		<Routes>
			<Route path="prueba" element={<Prueba />} />
		</Routes>
	);
};
