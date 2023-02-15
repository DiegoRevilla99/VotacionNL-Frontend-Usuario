import { Navigate, Route, Routes } from "react-router-dom";
import { AppBarCustom } from "../../module-home/components/AppBarCustom";
import { Topbar } from "../../module-home/components/Topbar";
import { AppBarVotacion } from "../../module-votacion/components/AppBarVotacion";
import { Formales } from "../pages/Formales";
import { IniciosResultados } from "../pages/IniciosResultados";
import { NoFormales } from "../pages/NoFormales";
import { Consultas } from "../pages/Consultas";
import { BoletasFormales } from "../pages/BoletasFormales";
import { BoletasConsultas } from "../pages/BoletasConsultas";
import { BoletasNoFormales } from "../pages/BoletasNoFormales";
import { ResultadosFormal } from "../pages/ResultadosFomal";



const statusVotante = "novotando";

export const ResultadosRoutes = () => {
	return (
		<>
			<div className="app">
				<main
					className="content"
					style={{
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#f8f7f3",
						overflowX: "auto",
						backgroundImage:
							"repeating-radial-gradient( circle at 0 0, transparent 0, #fafaf7 120px ), repeating-linear-gradient( #efefef55, #efefef )",
					}}
				>
					{statusVotante === "votando" ? <AppBarVotacion /> : <AppBarCustom />}

				
					<Routes>
						<Route path="inicio" element={<IniciosResultados />} />
						<Route path="formales" element={<Formales />} />
						<Route path="result-formales" element={<ResultadosFormal />} />
						<Route path="boletas-formales" element={<BoletasFormales />} />
						<Route path="boletas-consultas" element={<BoletasConsultas />} />
						<Route path="boletas-noformales" element={<BoletasNoFormales />} />
						<Route path="noFormales" element={<NoFormales />} />
						<Route path="consultas" element={<Consultas />} />
						<Route path="/*" element={<Navigate to="/resultados/inicio" />} />
					</Routes>
				</main>
			</div>
		</>
	);
};
