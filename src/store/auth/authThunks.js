import { deleteToken, setToken } from "../../providers/Micro-Auth/configAuth";
import { loginWithEmailAndPassword, logout } from "../../providers/Micro-Auth/providerAuth";
import { onChecking, onError, onLogin, onLogout } from "./authSlice";

export const onLoginWithEmailAndPassword = (email, password, navigate = () => {}) => {
	return async (dispatch) => {
		dispatch(onChecking());

		const { ok, accessToken, username, refreshToken } = await loginWithEmailAndPassword(
			email,
			password
		);

		if (ok) {
			console.log("TODO BIEN");
			dispatch(onLogin({ accessToken, username, refreshToken, email }));
			setToken(accessToken);
			navigate();
		} else {
			dispatch(onError("Error de autenticación. Revisa tus credenciales"));
		}
	};
};

export const onLogoutThunk = (navigate = () => {}) => {
	return async (dispatch) => {
		dispatch(onChecking());

		const { ok } = await logout();

		if (ok) {
			deleteToken();
			navigate();
			dispatch(onLogout());
		} else {
			dispatch(onError("Error"));
		}
	};
};
