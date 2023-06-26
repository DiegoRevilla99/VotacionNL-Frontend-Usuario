import {
    getValidarVoto, getValidarVotoConsulta,
    getValidarVotoNFML,
    getValidarVotosConsulta,
    getValidarVotosElecciones,
    getValidarVotosJornada
} from '../../providers/Micro-Verificacion/providerVerificacion';
import { OnClearError, onCheckingPeticion, onCheckingVerificacion, onError, onFillConsultas, onFillEleccionesSentidos, onFillJornadaSentidos, onFillVoto, onNoVerificando, onVerificado } from './verificacionSlice';



export const onGetValidarVoto = (claveVoto, navigate = () => {}) => {
    return async (dispatch) => {
		dispatch(onCheckingVerificacion());
        dispatch(onCheckingPeticion());
        // dispatch(onError());
        const { ok, data } = await getValidarVoto(claveVoto);
        console.log("data", data);
        if (ok) {
            dispatch(onFillVoto(data));
            dispatch(onVerificado());
            dispatch(OnClearError());
            navigate();
        }
		 else {
            // console.log("entro al error");
			dispatch(onNoVerificando());
			dispatch(onError("No se encontró los resultados con ese folio. Por favor verifique el folio o intente con otro"));
		}
	};
}

export const onGetValidarVotoConsulta = (claveVoto, navigate = () => {}) => {
    return async (dispatch) => {
		dispatch(onCheckingVerificacion());
		dispatch(onCheckingPeticion());
        // dispatch(onError());
        const { ok, data } = await getValidarVotoConsulta(claveVoto);
        console.log("data", data);
        if (ok) {
            dispatch(onFillVoto(data));
            dispatch(onVerificado());
            dispatch(OnClearError());
            navigate();
        }
		 else {
            // console.log("entro al error");
			dispatch(onNoVerificando());
			dispatch(onError("No se encontró los resultados con ese folio. Por favor verifique el folio o intente con otro"));
		}
	};
}
export const onGetValidarVotoNFML = (claveVoto, navigate = () => {}) => {
    return async (dispatch) => {
		dispatch(onCheckingVerificacion());
		dispatch(onCheckingPeticion());
        // dispatch(onError());
        const { ok, data } = await getValidarVotoNFML(claveVoto);
        console.log("data", data);
        if (ok) {
            dispatch(onFillVoto(data));
            dispatch(onVerificado());
            dispatch(OnClearError());
            navigate();
        }
		 else {
            // console.log("entro al error");
			dispatch(onNoVerificando());
			dispatch(onError("No se encontró los resultados con ese folio. Por favor verifique el folio o intente con otro"));
		}
	};
}



export const onGetData = (values) => {
    return async (dispatch) => {
        const { ok, data } = await getValidarVoto(values);
        if (ok) {
            dispatch(onFillVoto(data));
        } else {
            dispatch(onError("Error"));
        }
    };
}
    // Obtenemos todas las jornadas con los sentidos con sus folios
export const onGetFoliosJornadas = () => {
    return async (dispatch) => {
        dispatch(onCheckingPeticion());
        const { ok, data } = await getValidarVotosJornada();
        if (ok) {
            dispatch(onFillJornadaSentidos(data));
            // dispatch(onOkPeticion());
        } else {
            dispatch(onError("Error"));
        }
    };
}
    // Obtenemos todas las elecciones con los sentidos con sus folios
export const onGetFoliosEleccionesPopulares = () => {
    return async (dispatch) => {
        dispatch(onCheckingPeticion());
        const { ok, data } = await getValidarVotosElecciones();
        if (ok) {
            dispatch(onFillEleccionesSentidos(data));
            // dispatch(onOkPeticion());
        } else {
            dispatch(onError("Error"));
        }
    };
}
    // Obtenemos todas las consultas con los sentidos con sus folios
export const onGetFoliosConsultas = () => {
    return async (dispatch) => {
        dispatch(onCheckingPeticion());
        const { ok, data } = await getValidarVotosConsulta();
        if (ok) {
            dispatch(onFillConsultas(data));
            // dispatch(onOkPeticion());
        } else {
            dispatch(onError("Error"));
        }
    };
}


