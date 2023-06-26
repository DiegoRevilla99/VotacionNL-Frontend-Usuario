import { votosNoFormalAPI, votosSegurosAPI } from "./config";
import { votoConsultaAPI } from "./configConsulta";
export const getValidarVoto = async (claveVoto) => {
    try{
        // console.log("claveVoto", claveVoto);
        const { data } = await votosSegurosAPI.get(`votos_seguros/verificacion/${claveVoto}`);
        // https://ms-jornada-voto-seguro.herokuapp.com/votos_seguros/verificacion/ELECTORAL-ESIAK-KQHPV
        // https://ms-jornada-voto-seguro.herokuapp.com/votos_seguros/verificacion/ELECTORAL-NLGQX-AGAKJ
        // console.log("data", data.seleccionesPorBoleta);
        return { ok: true, data: data.seleccionesPorBoleta };
    } catch (error) {
        return { ok: false };
    }
};
export const getValidarVotoConsulta = async (claveVoto) => {
    try{
        // console.log("claveVoto", claveVoto);
        const { data } = await votoConsultaAPI.get(`verificacion/${claveVoto}`);
        // votos/consulta/verificacion/CONSULTA-KLAYN-UJVHU
        // https://ms-jornada-voto-seguro.herokuapp.com/votos_seguros/verificacion/ELECTORAL-NLGQX-AGAKJ
        // console.log("data", data.seleccionesPorBoleta);
        console.log("data", data);
        return { ok: true, data: data };
    } catch (error) {
        return { ok: false };
    }
};
export const getValidarVotoNFML = async (claveVoto) => {
    try{
        // console.log("claveVoto", claveVoto);
        const { data } = await votosNoFormalAPI.get(`verificacion/boleta/${claveVoto}`);
        // votos/no/formal/verificar/boleta/NFML-YVTRSD-EVTAVB
        // https://ms-jornada-voto-seguro.herokuapp.com/votos_seguros/verificacion/ELECTORAL-NLGQX-AGAKJ
        // console.log("data", data.seleccionesPorBoleta);
        console.log("data", data);
        return { ok: true, data: data };
    } catch (error) {
        return { ok: false };
    }
};
export const getValidarVotosJornada = async () => {
    try{
        // console.log("claveVoto", claveVoto);
        const { data } = await votosSegurosAPI.get(`votos_seguros/verificacion`);
        // https://ms-jornada-voto-seguro.herokuapp.com/votos_seguros/verificacion
        console.log("data", data);
        return { ok: true, data: data };
    } catch (error) {
        return { ok: false };
    }
};
export const getValidarVotosElecciones = async () => {
    try{
        const { data } = await votosNoFormalAPI.get(`verificacion`);
        console.log("data", data);
        return { ok: true, data: data };
    } catch (error) {
        return { ok: false };
    }
};
export const getValidarVotosConsulta = async () => {
    try{
        const { data } = await votoConsultaAPI.get(`verificacion`);
        console.log("data", data);
        return { ok: true, data: data };
    } catch (error) {
        return { ok: false };
    }
};


        

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
