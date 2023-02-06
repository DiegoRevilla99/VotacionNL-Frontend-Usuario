import { subirImagenes, verificarCredencial } from "../../providers/Micro-images/providerImages";
import { getDataVotantePassword } from "../../providers/Micro-Token/providerToken";
import {
	getStatusValidacion,
	guardarLinkVotante,
	verificarVotante,
} from "../../providers/Micro-Votante/providerVotante";
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
	onSetVerificado,
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

export const onVerificarCredencial = ({ credFrontalCrop, credTraseraCrop, selfieCrop, curp }) => {
	return async (dispatch) => {
		dispatch(onCheckingPeticion());

		const { ok, linkCredFrontalCrop, linkCredTraseraCrop, linkCredSelfieCrop } =
			await subirImagenes({
				credFrontalCrop,
				credTraseraCrop,
				selfieCrop,
			});

		if (ok) {
			const { ok1, verificado } = await verificarCredencial({
				linkCredFrontalCrop,
				linkCredTraseraCrop,
				linkCredSelfieCrop,
			});
			if (ok1) {
				console.log("LO QUE LLEGA", verificado);

				const { ok2 } = await guardarLinkVotante({
					curp,
					linkCredFrontalCrop,
					linkCredTraseraCrop,
				});

				if (ok2) {
					console.log("SE CAMBIÓ BIEN EL CAMPO VERIFICACION");
					const { ok3 } = await verificarVotante({ curp });

					if (ok3) {
						console.log("SE GUARDÓ BIEN EL LINK EN VOTANTE");
						dispatch(onSetVerificado(verificado));
						dispatch(onOkPeticion());
					} else {
						// TODO: BORRADO DE LA IMAGEN EN EL MICRO IMAGENES
						console.log("ERROR DE GUARDADO DE IMAGEN EN VOTANTE");
						dispatch(onError("Error"));
					}
				} else {
					// TODO: BORRADO DE LA IMAGEN EN EL MICRO IMAGENES
					console.log("ERROR DE DEL LLENADO DE CAMPO VERIFICACION EN VOTANTE");
					dispatch(onError("Error"));
				}
			} else {
				// TODO: BORRADO DE LA IMAGEN EN EL MICRO IMAGENES
				console.log("ERROR DE LA VERIFICACIÓN THUNK");
				dispatch(onError("Error"));
			}
		} else {
			console.log("ERROR DE LA SUBIDA DE IMAGENES");
			dispatch(onError("Error"));
		}
	};
};

export const onGetStatusValidacion = (curp) => {
	return async (dispatch) => {
		dispatch(onCheckingPeticion());
		console.log("ENTRA A PEDIR EL STATUS");

		const { ok, data } = await getStatusValidacion(curp);

		if (ok) {
			dispatch(onSetVerificado(data));
			dispatch(onOkPeticion());
		} else {
			dispatch(onError("Error"));
		}
	};
};
