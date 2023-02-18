import { jornadaNoFormalApi } from "./configNoFormal";

export const getJornadasNFProvider = async () => {
  return jornadaNoFormalApi
    .get(`jornada/no_formal/elecciones`)
    .then((response) => {
      return { ok: true, data: response.data, errorMessage: "" };
    })
    .catch((error) => {
      console.log(error);
      return { ok: false, data: "", errorMessage: error.message };
    });
};

export const getBoletasNFProvider = async (idJornada) => {
  try {
    // **FETCH
    const { data } = await jornadaNoFormalApi.get(
      "jornada/no_formal/" + idJornada + "/boletas"
    );
    console.log(data);
    return { ok: true, data: data.listBoletas };
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
