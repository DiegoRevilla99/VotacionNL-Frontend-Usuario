const objectToArray = (obj) => {
  let arreglo = Object.entries(obj);
  console.log(arreglo);
};

//CONSULTAS
export const convResult = (obj) => {
  const papeleta = obj.estructuraPapeleta;
  let pregunta = {
    idPregunta: obj.pregunta.idPregunta,
    descripcion: obj.pregunta.descPregunta,
    tipo: obj.pregunta.tipoRespuesta,
    subtipo: obj.pregunta.subtipo,
  };

  let resultados = {
    idPregunta: obj.resultados.idPregunta,
    idPregunta: obj.resultados.idPregunta,
  };
  let listaResul = [];
  let listaPregu = [];

  if (obj.pregunta.subtipo === "2respuestas") {
    listaPregu.push("SI");
    listaResul.push(obj.resultados.opc1);

    listaPregu.push("NO");
    listaResul.push(obj.resultados.opc2);
  } else if (obj.pregunta.subtipo === "3respuestas") {
    listaPregu.push("EN DESACUERDO");
    listaResul.push(obj.resultados.opc1);
    listaPregu.push("NEUTRAL");
    listaResul.push(obj.resultados.opc2);
    listaPregu.push("DE ACUERDO");
    listaResul.push(obj.resultados.opc3);
  } else if (obj.pregunta.subtipo === "escaladelikert") {
    listaPregu.push("Totalmente en desacuerdo");
    listaResul.push(obj.resultados.opc1);
    listaPregu.push("En desacuerdo");
    listaResul.push(obj.resultados.opc2);
    listaPregu.push("Neutral");
    listaResul.push(obj.resultados.opc3);
    listaPregu.push("De acuerdo");
    listaResul.push(obj.resultados.opc4);
    listaPregu.push("Totalmente de acuerdo");
    listaResul.push(obj.resultados.opc5);
  } else {
    if (obj.pregunta.opcion1 !== "") {
      listaPregu.push(obj.pregunta.opcion1);
      listaResul.push(obj.resultados.opc1);
    }
    if (obj.pregunta.opcion2 !== "") {
      listaPregu.push(obj.pregunta.opcion2);
      listaResul.push(obj.resultados.opc2);
    }
    if (obj.pregunta.opcion3 !== "") {
      listaPregu.push(obj.pregunta.opcion3);
      listaResul.push(obj.resultados.opc3);
    }
    if (obj.pregunta.opcion4 !== "") {
      listaPregu.push(obj.pregunta.opcion4);
      listaResul.push(obj.resultados.opc4);
    }
    if (obj.pregunta.opcion5 !== "") {
      listaPregu.push(obj.pregunta.opcion5);
      listaResul.push(obj.resultados.opc5);
    }
  }

  listaPregu.push("nulos");
  pregunta.lista = listaPregu;
  listaResul.push(obj.resultados.nulos);
  resultados.lista = listaResul;

  let resOrd = [...resultados.lista];

  resOrd.sort(function (a, b) {
    return b - a;
  });

  const ganadores = [];
  const gan = resultados.lista.map((res, index) => {
    if (res === resOrd[0]) {
      const win = { question: pregunta.lista[index], result: res };
      ganadores.push(win);
      return win;
    }
  });
  const nulos = obj.resultados.nulos;
  let acumulados =
    parseInt(obj.resultados.opc1, 10) +
    parseInt(obj.resultados.opc2, 10) +
    parseInt(obj.resultados.opc3, 10) +
    parseInt(obj.resultados.opc4, 10) +
    parseInt(obj.resultados.opc5, 10);
  console.log("acumulados: ", acumulados);

  const data = {
    papeleta,
    pregunta,
    resultados,
    ganadores,
    nulos,
    acumulados,
  };

  return data;
};

export const toNoFormal = (data) => {
  console.log(data);
  const modalidad = data?.boletaCandidatos.modalidad.modalidad;
  const cantWin = data?.boletaCandidatos.modalidad.maxOpciones;
  const candidatos = data.boletaCandidatos.candidatoModels.map((candidato) => {
    // console.log(data.representanteResultado);
    const result = data.representanteResultado.find((res) => {
      // console.log(res);
      if (candidato.claveCandidato === res.id) return res;
    });
    return { ...candidato, votos: result.candidad };
  });

  let newArray = data.representanteResultado;
  newArray.sort((a, b) => {
    return b.candidad - a.candidad;
  });

  let winers = [];

  for (let i = 0; i < cantWin; i++) {
    const ganador = data.boletaCandidatos.candidatoModels.find((gan) => {
      if (gan.claveCandidato === newArray[i].id) return gan;
    });
    winers.push({ ...ganador, votos: newArray[i].candidad });
  }

  console.log(candidatos);
  return {
    modalidad,
    cantWin,
    candidatos,
    winers,
  };
};
