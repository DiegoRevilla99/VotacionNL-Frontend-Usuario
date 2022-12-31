import { Route, Routes } from "react-router-dom";
import { AppBarAuth } from "../../module-auth/components/AppBarAuth";
import { AppBarCustom } from "../../module-home/components/AppBarCustom";
import { AppBarVotacion } from "../components/AppBarVotacion";
import { Boletas } from "../pages/Boletas";
import { InicioVotante } from "../pages/InicioVotante";
import { Prueba } from "../pages/Prueba";

const statusVotante = "votando";

export const VotacionRoutes = () => {
	return (
		<>
			<div className="app">
				<main
					className="content"
					style={{
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#f8f7f3",
						// overflowX: "hidden",
						backgroundImage:
							"repeating-radial-gradient( circle at 0 0, transparent 0, #fafaf7 120px ), repeating-linear-gradient( #efefef55, #efefef )",
					}}
				>
					{statusVotante === "votando" ? <AppBarVotacion /> : <AppBarCustom />}

					{/* <Topbar /> */}
					<Routes>
						<Route path="prueba" element={<Prueba />} />
						<Route path="inicio" element={<InicioVotante />} />
						<Route path="boletas" element={<Boletas />} />
					</Routes>
				</main>
			</div>
		</>
	);
};
