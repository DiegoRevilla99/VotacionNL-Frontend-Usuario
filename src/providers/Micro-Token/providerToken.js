import { authAPI } from "../Micro-Auth/configAuth";
import { tokenApi, tokenSmsApi } from "./configToken";

export const getDataVotantePassword = async (token) => {
	try {
		const { data } = await tokenApi.get(`email/validation/verification/${token}`);
		// await timeout(1000);

		console.log("DATA USER: ");
		return { ok: true, data: data };
	} catch (error) {
		console.log("ERROR DATA USER", error);
		return { ok: false };
	}
};

export const registrarUsuario = async (password, email, curp) => {
	console.log(password, email, curp);
	try {
		const { data } = await authAPI.post(`api/auth/signup`, {
			curp: curp,
			email: email,
			password: password,
			roles: ["ROLE_VOTANTE"],
		});
		// await timeout(4000);

		// console.log("DATA USER: ", data);
		return { ok: true };
	} catch (error) {
		console.log("ERROR DATA USER", error);
		return { ok: false };
	}
};

export const enviartTokenSms = async (curp) => {
	try {
		const response = await tokenSmsApi.post(`sms/validation/sendtoken/${curp}`, {
			telefono: "9512406578",
		});
		// await timeout(1000);

		console.log("POST TOKEN", response);
		return { ok: true };
	} catch (error) {
		console.log("ERROR POST ENVIO TOKEN SMS", error);
		return { ok: false };
	}
};

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
