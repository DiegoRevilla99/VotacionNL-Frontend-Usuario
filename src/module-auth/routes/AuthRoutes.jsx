import { Route, Routes } from "react-router-dom";
import { AppBarCustom } from "../../module-home/components/AppBarCustom";
import { AppBarAuth } from "../components/AppBarAuth";
import { EstablecerContrasenia } from "../pages/EstablecerContrasenia";
import { LoginVotacionPage } from "../pages/LoginVotacionPage";
import { SuccessPage } from "../pages/SuccessPage";

export const AuthRoutes = () => {
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
					<AppBarAuth />
					{/* <Topbar /> */}
					<Routes>
						<Route path="login" element={<LoginVotacionPage />} />
						<Route
							path="establecerPassword/:token"
							element={<EstablecerContrasenia />}
						/>
						<Route path="success" element={<SuccessPage />} />
					</Routes>
				</main>
			</div>
		</>
	);
};
