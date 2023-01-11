import { authAPI } from "./configAuth";

export const loginWithEmailAndPassword = async (email, password) => {
	try {
		const { data } = await authAPI.post("api/auth/signin", {
			curp: email,
			password: password,
		});

		console.log("DATA: ", data);
		return {
			ok: true,
			accessToken: data.accessToken,
			username: data.username,
			refreshToken: data.refreshToken,
		};
	} catch (error) {
		return { ok: false };
	}
};
export const logout = async (email, password) => {
	try {
		const { data } = await authAPI.post("api/auth/signout", {});

		console.log("DATA LOGOUT: ", data);
		return { ok: true };
	} catch (error) {
		console.log(error.message);
		return { ok: false };
	}
};

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
