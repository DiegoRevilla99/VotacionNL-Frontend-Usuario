import { Navigate, Route, Routes } from "react-router-dom";
import { PasosPage } from "../../module-auth/pages/PasosPage";
import { RenviarEnlaceBlanco } from "../../module-auth/pages/RenviarEnlaceBlanco";
import { ConsultaFound } from "../../module-verificacion/components/ConsultaFound";
import { ConsultasCiudadanas } from "../../module-verificacion/components/ConsultasCiudadanas";
import { FolioFound } from "../../module-verificacion/components/FolioFound";
import { Jornadas } from "../../module-verificacion/components/Jornadas";
import { JornadasNoFormales } from "../../module-verificacion/components/JornadasNoFormales";
import { PopularesFound } from "../../module-verificacion/components/PopularesFound";
import { GroupPage } from "../../module-verificacion/pages/GroupPage";
import { GroupPageConsulta } from "../../module-verificacion/pages/GroupPageConsulta";
import { GroupPageLogged } from "../../module-verificacion/pages/GroupPageLogged";
import { IndividualPage } from "../../module-verificacion/pages/IndividualPage";
import { VerificacionPage } from "../../module-verificacion/pages/VerificacionPage";
import { VisualizacionBoleta } from "../../module-verificacion/pages/VisualizacionBoleta";
import { VisualizacionBoletaNoFormal } from "../../module-verificacion/pages/VisualizacionBoletaNoFormal";
import { VisualizacionPapeleta } from "../../module-verificacion/pages/VisualizacionPapeleta";
import { HomePage } from "../pages/HomePage";
export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="home" element={<HomePage />} />
			<Route path="pasosVerificacion" element={<PasosPage />} />
			<Route path="verificacion" element={<VerificacionPage />} />
			<Route path="verificacion/individual" element={<IndividualPage />} />
			{/* <Route path="verificacion/individual/FoundFolio" element={<FolioFound />} /> */}
			<Route path="/verificacion/individual/:folio/FoundFolio" element={<FolioFound />} />
			<Route path="/verificacion/individual/:folio/ConsultaFound" element={<ConsultaFound />} />
			<Route path="/verificacion/individual/:folio/PopularesFound" element={<PopularesFound />} />
			{/* <Route path="/verificacion/individual/PopularesFound" element={<PopularesFound />} /> */}
			{/* <Route path="/verificacion/individual/FoundFolio" element={<FolioFound />} /> */}
			{/* No Logueado */}
			<Route path="verificacion/visualizacion" element={<Jornadas />} />
			<Route path="verificacion/visualizacion/boleta/:id" element={<VisualizacionBoleta />} />
			<Route
				path="verificacion/visualizacion/boleta/:id/group/:idBoleta"
				element={<GroupPage />}
			/>
			{/* navigate("/verificacion/visualizacion/"+params.id+"/boleta/"+id); */}
			{/*Logueado */}
			<Route path="verificacion/visualizacionnf" element={<JornadasNoFormales />} />

			<Route
				path="verificacion/visualizacionnf/boletanf/:id"
				element={<VisualizacionBoletaNoFormal />}
			/>
			<Route
				path="verificacion/visualizacionnf/boletanf/:id/groupnf/:idBoleta"
				element={<GroupPageLogged />}
			/>

			<Route path="verificacion/consultas" element={<ConsultasCiudadanas />} />
			<Route
				path="verificacion/consultas/papeletas"
				element={<VisualizacionPapeleta />}
			/>
			<Route
				path="verificacion/consultas/papeletas/:id"
				element={<VisualizacionPapeleta />}
			/>
			<Route
				path="verificacion/consultas/papeletas/:id/group/:idBoleta"
				element={<GroupPageConsulta />}
			/>
			<Route path="reenviarToken" element={<RenviarEnlaceBlanco />} />
			<Route path="/*" element={<Navigate to="/home" />} />
		</Routes>
	);
};
