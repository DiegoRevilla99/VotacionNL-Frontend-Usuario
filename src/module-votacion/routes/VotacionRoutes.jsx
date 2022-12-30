import { Route, Routes } from "react-router-dom";
import { AppBarAuth } from "../../module-auth/components/AppBarAuth";
import { AppBarCustom } from "../../module-home/components/AppBarCustom";
import { InicioVotante } from "../pages/InicioVotante";
import { Prueba } from "../pages/Prueba";

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
					<AppBarCustom />
					{/* <Topbar /> */}
					<Routes>
						<Route path="prueba" element={<Prueba />} />
						<Route path="inicio" element={<InicioVotante />} />
					</Routes>
				</main>
			</div>
		</>
	);
};
