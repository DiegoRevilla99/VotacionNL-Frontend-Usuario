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
