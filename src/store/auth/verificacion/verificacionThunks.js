import {
    verificacionRespuesta, verificarFolio
} from 'providers/Micro-Verificacion/providerVerificacion';
import {
    onError,
    // onCheckingPeticion,
    // onOkPeticion,
    // onFailPeticion,
    // onOffPeticion,
    // onCheckingVerificacion,
    // onVerificando,
    onNoVerificando
} from 'store/auth/verificacion/verificacionSlice';

export const onVerficacionVoto = (values, navigate = () => {}) => {
    return async (dispatch) => {
        // dispatch(onChecking());
        // dispatch(onCheckingVerificacion());
        const { ok } = await verificarFolio(values);
        if (ok) {
            dispatch(onNoVerificando());
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

