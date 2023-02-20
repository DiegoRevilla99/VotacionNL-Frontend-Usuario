import {
    getValidarVoto, getValidarVotoConsulta, getVerificacionRespuesta, getVerificacionRespuestaFormal, verificacionRespuesta
} from '../../../providers/Micro-Verificacion/providerVerificacion';
import {
    onCheckingPeticion, onError, onFillBoletas, onFillVoto, onNoVerificando, onOkPeticion, onValidarVoto, onVerificando
} from './verificacionSlice';



export const onGetValidarVoto = (claveVoto, navigate = () => {}) => {
    return async (dispatch) => {
		dispatch(onCheckingVotante());
        const { ok, data } = await getValidarVoto(claveVoto);
        if (ok) {
            dispatch(onFillVoto(data));
            dispatch(onVerificando());
            navigate();
        }
		 else {
			dispatch(onNoVotando());
			dispatch(onError("El token es incorrecto o ha caducado."));
		}
	};
}
// export const onGetValidarVoto = (claveVoto, navigate = () => {}) => {
//     return async (dispatch) => {
//         // dispatch(onChecking());
//         // dispatch(onCheckingVerificacion());
//         const { ok, data } = await getValidarVoto(claveVoto); // provider
//         if (ok) {
//             dispatch(onValidarVoto(data)); // slice
//             navigate();
//         } else {
//             dispatch(onError("Error de verificación. Revisa tu folio"));
//         }
//     };
// }
export const onGetValidarVotoConsulta = (claveVoto, navigate = () => {}) => {
    return async (dispatch) => {
        // dispatch(onChecking());
        // dispatch(onCheckingVerificacion());
        const { ok, data } = await getValidarVotoConsulta(claveVoto); // provider
        if (ok) {
            dispatch(onValidarVoto(data)); // slice
            navigate();
        } else {
            dispatch(onError("Error de verificación. Revisa tu folio"));
        }
    };
}
export const onVerficacionRespuesta = (values, navigate = () => {}) => {
    return async (dispatch) => {
        // dispatch(onChecking());
        // dispatch(onCheckingVerificacion());
        const { ok } = await verificacionRespuesta(values);
        if (ok) {
            dispatch(onNoVerificando());
            navigate();
        } else {
            dispatch(onError("Error"));
        }
    };
}
    // SOLO OIBTENEMOS UN CANDIDATO
export const onGetVerificacionRespuestaFormal = (uid) => {
    return async (dispatch) => {
        dispatch(onCheckingPeticion());
        const { ok, data } = await getVerificacionRespuestaFormal(uid);
        if (ok) {
            dispatch(onFillBoletas(data));
            dispatch(onOkPeticion());
        } else {
            dispatch(onError("Error"));
        }
    };
}
    // OIBTENEMOS un/dos/tres CANDIDATO
export const onGetVerificacionRespuesta = (uid) => {
    return async (dispatch) => {
        dispatch(onCheckingPeticion());
        const { ok, data } = await getVerificacionRespuesta(uid);
        if (ok) {
            dispatch(onFillBoletas(data));
            dispatch(onOkPeticion());
        } else {
            dispatch(onError("Error"));
        }
    };
}
    // Obtenemos todos los sentidos con sus folios
export const onGetVerificacionBoletas = (uid) => {
    return async (dispatch) => {
        dispatch(onCheckingPeticion());
        const { ok, data } = await getVerificacionRespuesta(uid);
        if (ok) {
            dispatch(onFillBoletas(data));
            dispatch(onOkPeticion());
        } else {
            dispatch(onError("Error"));
        }
    };
}