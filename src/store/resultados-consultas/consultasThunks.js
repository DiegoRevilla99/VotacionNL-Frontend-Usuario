import {
  getConsultasCiudadanasProvider,
  getPapeletasProvider,
  getResultadosProvider,
} from "../../providers/Micro-ConsultasCiudadanas/providerConsultas";
import {
  setJornadas,
  setPapeletas,
  setResultados,
  startLoadingJornadas,
  startLoadingPapeletas,
  startLoadingResultados,
} from "./consultasSlice";

const objectToArray = (obj) => {
  let arreglo = Object.entries(obj);
  console.log(arreglo);
};

const convResult = (obj) => {
  const papeleta = obj.estructuraPapeleta;
  let pregunta = {
    idPregunta: obj.pregunta.idPregunta,
    descripcion: obj.pregunta.descPregunta,
    tipo: obj.pregunta.tipoRespuesta,
    subtipo: obj.pregunta.subtipo,
  };
  let listaPregu = [];
  listaPregu.push(obj.pregunta.opcion1);
  listaPregu.push(obj.pregunta.opcion2);
  listaPregu.push(obj.pregunta.opcion3);
  listaPregu.push(obj.pregunta.opcion4);
  listaPregu.push(obj.pregunta.opcion5);
  listaPregu.push("nulos");
  pregunta.lista = listaPregu;

  let resultados = {
    idPregunta: obj.resultados.idPregunta,
    idPregunta: obj.resultados.idPregunta,
  };
  let listaResul = [];
  listaResul.push(obj.resultados.opc1);
  listaResul.push(obj.resultados.opc2);
  listaResul.push(obj.resultados.opc3);
  listaResul.push(obj.resultados.opc4);
  listaResul.push(obj.resultados.opc5);
  listaResul.push(obj.resultados.nulos);
  resultados.lista = listaResul;

  const data = {
    papeleta,
    pregunta,
    resultados,
  };

  return data;
};

export const getJornadasConsultas = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingJornadas());
    const { ok, data, errorMessage } = await getConsultasCiudadanasProvider();
    if (ok) {
      dispatch(setJornadas({ jornadas: data }));
    } else {
    }
  };
};

export const getPapletas = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPapeletas());
    const { ok, data, errorMessage } = await getPapeletasProvider(id);
    if (ok) {
      dispatch(setPapeletas({ papeletas: data }));
    } else {
    }
  };
};

export const getResult = (idJornada, idConsulta) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingResultados());
    const { ok, data, errorMessage } = await getResultadosProvider(idJornada);

    if (ok) {
      let convData = false;
      const newData = data.papeletas.find((papeleta) => {
        if (papeleta.estructuraPapeleta.idPapeleta.toString() === idConsulta) {
          return papeleta;
        }
      });

      if (newData) {
        convData = convResult(newData);
      }

      dispatch(setResultados({ resultados: convData }));
    } else {
    }
  };
};
