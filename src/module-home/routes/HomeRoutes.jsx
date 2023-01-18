import { Route, Routes } from "react-router-dom";
import { PasosPage } from "../../module-auth/pages/PasosPage";
import { HomePage } from "../pages/HomePage";
import { VerificacionPage } from "../../module-verificacion/pages/VerificacionPage";
import { IndividualPage } from "../../module-verificacion/pages/IndividualPage";
import { GroupPage } from "../../module-verificacion/pages/GroupPage";
import { FolioFound } from "../../module-verificacion/components/FolioFound";
import { GroupPageLogged } from "../../module-verificacion/pages/GroupPageLogged";
import { Jornadas } from "../../module-verificacion/components/Jornadas";
import { VisualizacionBoleta } from "../../module-verificacion/components/VisualizacionBoleta";
import { JornadasNoFormales } from "../../module-verificacion/components/JornadasNoFormales";
import { VisualizacionBoletaNoFormal } from "../../module-verificacion/components/VisualizacionBoletaNoFormal";
export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="home" element={<HomePage />} />
			<Route path="pasosVerificacion" element={<PasosPage />} />
			<Route path="verificacion" element={<VerificacionPage/>} />
			<Route path="verificacion/individual" element={<IndividualPage/>} />
			<Route path="verificacion/individual/FoundFolio" element={<FolioFound/>}/>

			{/* No Logueado */}
			<Route path="verificacion/visualizacion" element={<Jornadas/>} />
			<Route path="verificacion/visualizacion/boleta" element={<VisualizacionBoleta/>} />
			<Route path="verificacion/visualizacion/boleta/group" element={<GroupPage/>} />
			{/*Logueado */}
			<Route path="verificacion/visualizacionnf" element={<JornadasNoFormales/>} />
			<Route path="verificacion/visualizacionnf/boletanf" element={<VisualizacionBoletaNoFormal/>} />
			<Route path="verificacion/visualizacionnf/boletanf/groupnf" element={<GroupPageLogged/>} />
		</Routes>
	);
};
