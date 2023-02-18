import { jornadaFormalApi } from "./configjornadaFormal";

export const getJornadasFormalesProvider = async () => {
  return jornadaFormalApi
    .get(`jornada/electoral/`)
    .then((response) => {
      return { ok: true, data: response.data.data, errorMessage: "" };
    })
    .catch((error) => {
      console.log(error);
      return { ok: false, data: "", errorMessage: error.message };
    });
};

export const getBoletasFormalesProvider = async (idJornada) => {
  try {
    // **FETCH
    const { data } = await jornadaFormalApi.get(
      "jornada/electoral/jornada/" + idJornada + "/estructurasboletas"
    );
    return { ok: true, data: data.data };
  } catch (error) {
    return { ok: false };
  }
};

/* export const getResultadosFormalesProvider = async (idJornada) => {
  try {
    // **FETCH
    const response = await jornadaFormalApi.get(
      "votos/consulta/jornada/" + idJornada + "/resultados"
    );
    return { ok: true, data: response.data };
  } catch (error) {
    return { ok: false };
  }
}; */
