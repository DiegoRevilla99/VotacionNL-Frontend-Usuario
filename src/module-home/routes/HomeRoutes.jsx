import { Route, Routes } from "react-router-dom";
import { PasosPage } from "../../module-auth/pages/PasosPage";
import { HomePage } from "../pages/HomePage";
import { VerificacionPage } from "../../module-verificacion/pages/VerificacionPage";
import { IndividualPage } from "../../module-verificacion/pages/IndividualPage";
import { GroupPage } from "../../module-verificacion/pages/GroupPage";
import { FolioFound } from "../../module-verificacion/components/FolioFound";
import { VisualizacionJornada } from "../../module-verificacion/components/VisualizacionJornada";
import { GroupPageLogged } from "../../module-verificacion/pages/GroupPageLogged";
export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="home" element={<HomePage />} />
			<Route path="pasosVerificacion" element={<PasosPage />} />
			<Route path="verificacion" element={<VerificacionPage/>} />
			<Route path="verificacion/individual" element={<IndividualPage/>} />
			<Route path="verificacion/individual/FoundFolio" element={<FolioFound/>}/>
			<Route path="verificacion/grupo" element={<GroupPage/>} />
			{/* Logueado */}
			<Route path="verificacion/visualizacion" element={<VisualizacionJornada/>} />
			<Route path="verificacion/visualizacion/group" element={<GroupPageLogged/>} />
		</Routes>
	);
};
