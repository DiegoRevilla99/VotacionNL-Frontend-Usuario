import { getDataVotantePassword } from "../../providers/Micro-Token/providerToken";
import {
	comenzarVotacion,
	emitirRespuestaConsulta,
	emitirVoto,
	getBoletasDeVotante,
	getConsultasDeVotante,
} from "../../providers/Micro-Votos/providerVotos";
import { onChecking } from "../auth/authSlice";
import {
	onCheckingVotante,
	onError,
	onVotando,
	onNoVotando,
	onFillBoletas,
	onCheckingPeticion,
	onOkPeticion,
	onSetConsulta,
} from "./votanteSlice";

export const onEmitirVoto = (values, navigate = () => {}) => {
	return async (dispatch) => {
		// dispatch(onChecking());

		const { ok } = await emitirVoto();

		if (ok) {
			// dispatch(onLogin({ uid: uid, displayName: name, email: email }));
			dispatch(onNoVotando());
			navigate();
		} else {
			dispatch(onError("Error de autenticación. Revisa tus credenciales"));
		}
	};
};

export const onEmitirRespuestaConsulta = (values, navigate = () => {}) => {
	return async (dispatch) => {
		// dispatch(onChecking());

		const { ok } = await emitirRespuestaConsulta();

		if (ok) {
			// dispatch(onLogin({ uid: uid, displayName: name, email: email }));
			dispatch(onNoVotando());
			navigate();
		} else {
			dispatch(onError("Error."));
		}
	};
};

export const onComenzarVotacion = (values, navigate = () => {}) => {
	return async (dispatch) => {
		// dispatch(onChecking());
		dispatch(onCheckingVotante());

		const { ok } = await comenzarVotacion();

		if (ok) {
			// dispatch(onLogin({ uid: uid, displayName: name, email: email }));
			dispatch(onVotando());
			navigate();
		} else {
			dispatch(onError("Error de autenticación. Revisa tus credenciales"));
		}
	};
};

export const onComenzarConsulta = (values, navigate = () => {}) => {
	return async (dispatch) => {
		// dispatch(onChecking());
		dispatch(onCheckingVotante());

		const { ok } = await comenzarVotacion();

		if (ok) {
			// dispatch(onLogin({ uid: uid, displayName: name, email: email }));
			dispatch(onVotando());
			navigate();
		} else {
			dispatch(onError("Error."));
		}
	};
};

export const onGetBoletasDeVotante = (uid) => {
	return async (dispatch) => {
		// dispatch(onChecking());
		dispatch(onCheckingPeticion());

		const { ok, data } = await getBoletasDeVotante(uid);

		if (ok) {
			// dispatch(onLogin({ uid: uid, displayName: name, email: email }));
			dispatch(onFillBoletas(data));
			dispatch(onOkPeticion());
		} else {
			dispatch(onError("Error de autenticación. Revisa tus credenciales"));
		}
	};
};

export const onGetConsultasDeVotante = (uid) => {
	return async (dispatch) => {
		// dispatch(onChecking());
		dispatch(onCheckingPeticion());
		console.log("hace la peticion");

		const { ok, data } = await getConsultasDeVotante(uid);

		if (ok) {
			// dispatch(onLogin({ uid: uid, displayName: name, email: email }));
			dispatch(onSetConsulta(data));
			dispatch(onOkPeticion());
		} else {
			dispatch(onError("Error de autenticación. Revisa tus credenciales"));
		}
	};
};
