import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../providers/Micro-Auth/configAuth";
import { onChecking, onError, onLogin, onLogout } from "../../store/auth/authSlice";

export const useCheckAuth = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const timeout = (ms) => {
		dispatch(onChecking());
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	useEffect(() => {
		async function cargaUsuario() {
			if (!getToken()) {
				dispatch(onLogout());
				return;
			}

			try {
				// const {data: usuario} = await axios.get("url")
				console.log("LLEGA AQUI");
				await timeout(500);
				dispatch(
					onLogin({
						accessToken: getToken(),
						username: "DEFAULT",
						refreshToken: "aaa",
						email: "DEFAULT",
					})
				);
				// navigate(sessionStorage.getItem("Location"));
			} catch (error) {
				// dispatch(onError({ errorMessage: "PROBANDO1 " }));
				dispatch(onLogout());
				console.log(error);
			}
		}

		cargaUsuario();
	}, []);

	return {
		status: status,
	};
};
