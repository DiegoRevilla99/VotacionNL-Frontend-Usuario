import { Route, Routes } from "react-router-dom";
import { PasosPage } from "../../module-auth/pages/PasosPage";
import { HomePage } from "../pages/HomePage";
import { VerificacionPage } from "../../module-verificacion/pages/VerificacionPage";
import { IndividualPage } from "../../module-verificacion/pages/IndividualPage";
import { GroupPage } from "../../module-verificacion/pages/GroupPage";
import { FolioNotFound } from "../../module-verificacion/components/FolioNotFound";
import { FolioFound } from "../../module-verificacion/components/FolioFound";

export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="home" element={<HomePage />} />
			<Route path="pasosVerificacion" element={<PasosPage />} />
			<Route path="verificacion" element={<VerificacionPage/>} />
			<Route path="verificacion/individual" element={<IndividualPage/>} />
			<Route path="verificacion/grupo" element={<GroupPage/>} />
			{/* Not found folio */}
			<Route path="verificacion/individual/notFoundFolio" element={<FolioNotFound/>}/>
			<Route path="verificacion/individual/FoundFolio" element={<FolioFound/>}/>
		</Routes>
	);
};
