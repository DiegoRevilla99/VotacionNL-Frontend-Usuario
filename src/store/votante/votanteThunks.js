import {
	comenzarVotacion,
	emitirVoto,
	getBoletasDeVotante,
} from "../../providers/Micro-Votos/providerVotos";
import {
	onCheckingVotante,
	onError,
	onVotando,
	onNoVotando,
	onFillBoletas,
	onCheckingPeticion,
	onOkPeticion,
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
