import {
  getBoletabyIDProvider,
  getBoletasFormalesProvider,
  getConfigJornadaFormalesProvider,
  getJornadasFormalesProvider,
  getResultadosFormalesProvider,
} from "../../providers/Micro-JornadaFormal/providerFormal";
import {
  setBoleta,
  setBoletaInfo,
  setBoletas,
  setJornadas,
  setResultados,
  setConfigJornadaFormal,
  startLoadingBoleta,
  startLoadingBoletaInfo,
  startLoadingBoletas,
  startLoadingJornadas,
  startLoadingResultados,
  startLoadingConfigJornadaFormal,
} from "./formalesSlice";

export const getJornadasFormales = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingJornadas());
    const { ok, data, errorMessage } = await getJornadasFormalesProvider();
    if (ok) {
      dispatch(setJornadas({ jornadas: data }));
    } else {
      dispatch(setJornadas({ jornadas: [] }));
    }
  };
};

export const getBoletasFormales = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingBoletas());
    const { ok, data, errorMessage } = await getBoletasFormalesProvider(id);
    if (ok) {
      dispatch(setBoletas({ boletas: data }));
    } else {
    }
  };
};

export const getBoletaBYIDFormales = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingBoletaInfo());
    const { ok, data, errorMessage } = await getBoletabyIDProvider(id);
    if (ok) {
      dispatch(setBoletaInfo({ boletaInfo: data }));
    } else {
      dispatch(setBoletaInfo({ boletaInfo: false }));
    }
  };
};

export const getResultFormales = (idJornada, idConsulta) => {
  return async (dispatch, getState) => {
    dispatch(setBoleta({ boleta: false }));
    dispatch(setResultados({ resultados: false }));
    dispatch(startLoadingResultados());
    const { ok, data, errorMessage } = await getResultadosFormalesProvider(
      idJornada
    );

    if (ok) {
      console.log("Todo ok");
      let convData = false;
      const newData = data.boletas.find((boleta) => {
        if (boleta.idBoleta.toString() === idConsulta) {
          return boleta;
        }
      });

      if (newData) {
        convData = toRepFormal(newData);
      }

      dispatch(setBoleta({ boleta: convData }));
      dispatch(setResultados({ resultados: data }));
    } else {
    }
  };
};

//_________________________jornada electoral_______________________

const toRepFormal = (data) => {
  console.log("Inicial:", data);
  console.log("VOTOS NULOS:", data.votosNulos);

  let nulo = {
    name: "Voto nulo",
    datosCandidato: null,
    candidad: 0,
  };
  let acumuladas = 0;
  let cnr = data.candidaturasNoReg ? data.candidaturasNoReg : [];
  let candidatos = [];

  if (data.boletaCandidatos) {
    candidatos = data.boletaCandidatos.map((candi) => {
      if (candi.datosCandidato === null) {
        if (candi.name === "Voto nulo") {
          nulo.candidad += 1;
        } else {
          cnr.push(candi);
        }
        return null;
      }

      acumuladas += candi.candidad;

      return {
        nombre: candi.name,
        foto: candi.datosCandidato.candidatoModel.fotoCandidato,
        partidos: candi.datosCandidato.partidos,
        candidad: candi.candidad,
      };
    });
  }

  candidatos = candidatos.filter((c) => c !== null);

  let totalcnr = 0;
  cnr.forEach((c) => {
    totalcnr += c.candidad;
  });

  candidatos.sort((a, b) => b.candidad - a.candidad);

  let winner = null;
  let empatados = [];
  let isEmpate = false;
  if (candidatos.length > 0) {
    const maxVotes = candidatos[0].candidad;
    const winners = candidatos.filter((c) => c.candidad === maxVotes);
    console.log("Ganadores: ", winners);
    if (winners.length === 1) {
      winner = winners[0];
    } else {
      isEmpate = true;
      winner = winners.map((w) => w.nombre);
    }
  }
  console.log("Ganador:::", winner);

  const result = {
    candidatos,
    // nulo: nulo.candidad,
    nulo: data.votosNulos,
    cnr: totalcnr,
    acumuladas,
    empatados,
    isEmpate,
    winner,
  };

  console.log("Final:", result);

  return result;
};

/* const toRepFormal = (data) => {
  console.log("Inicial:", data);
  let nulo = {
    name: "Voto nulo",
    datosCandidato: null,
    candidad: 0,
  };
  let acumuladas = 0;
  let cnr = data.candidaturasNoReg ? data.candidaturasNoReg : [];
  let candidatos = [];
  if (data.boletaCandidatos) {
    candidatos = data.boletaCandidatos.map((candi) => {
      if (candi.datosCandidato === null) {
        if (candi.name === "Voto nulo") {
          nulo = nulo.candidad + 1;
        } else {
          cnr = candi;
        }
        return null;
      }

      acumuladas += candi.candidad;

      return {
        nombre: candi.name,
        foto: candi.datosCandidato.candidatoModel.fotoCandidato,
        partidos: candi.datosCandidato.partidos,
        candidad: candi.candidad,
      };
    });
  }

  candidatos = candidatos.filter((c) => {
    if (c) return c;
  });

  let totalcnr = 0;
  cnr.map((c) => {
    totalcnr += c.candidad;
  });

  candidatos.sort((a, b) => {
    return b.candidad - a.candidad;
  });

  console.log("Final:", {
    candidatos,
    nulo: nulo.candidad,
    cnr: totalcnr,
    acumuladas,
    winner: candidatos[0],
  });

  return {
    candidatos,
    nulo: nulo.candidad,
    cnr: totalcnr,
    acumuladas,
    winner: candidatos[0],
  };
}; */

export const getConfigJornadaFormal = (idJornada) => {
  return async (dispatch, getState) => {
    dispatch(setConfigJornadaFormal({ configJornadaFormal: false }));
    dispatch(startLoadingConfigJornadaFormal());
    const { ok, data, errorMessage } = await getConfigJornadaFormalesProvider(
      idJornada
    );
    if (ok) {
      dispatch(setConfigJornadaFormal({ configJornadaFormal: data }));
    } else {
      dispatch(setConfigJornadaFormal({ configJornadaFormal: false }));
    }
  };
};
