const objectToArray = (obj) => {
  let arreglo = Object.entries(obj);
  console.log(arreglo);
};

//CONSULTAS
export const convResult = (obj) => {
  console.log("inicial CONSULTA:", obj);
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
    if ((obj.pregunta.opcion1 !== "") | (obj.resultados.opc1 > 0)) {
      listaPregu.push(obj.pregunta.opcion1);
      listaResul.push(obj.resultados.opc1);
    }
    if ((obj.pregunta.opcion2 !== "") | (obj.resultados.opc2 > 0)) {
      listaPregu.push(obj.pregunta.opcion2);
      listaResul.push(obj.resultados.opc2);
    }
    if ((obj.pregunta.opcion3 !== "") | (obj.resultados.opc3 > 0)) {
      listaPregu.push(obj.pregunta.opcion3);
      listaResul.push(obj.resultados.opc3);
    }
    if ((obj.pregunta.opcion4 !== "") | (obj.resultados.opc4 > 0)) {
      listaPregu.push(obj.pregunta.opcion4);
      listaResul.push(obj.resultados.opc4);
    }
    if ((obj.pregunta.opcion5 !== "") | (obj.resultados.opc5 > 0)) {
      listaPregu.push(obj.pregunta.opcion5);
      listaResul.push(obj.resultados.opc5);
    }
  }

  pregunta.lista = listaPregu;
  // listaResul.push(obj.resultados.nulos);
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

  const data = {
    papeleta,
    pregunta,
    resultados,
    ganadores,
    nulos,
    acumulados,
  };
  console.log("FINA - CONSULTA:", data);

  return data;
};

const toComite = (data) => {
  console.log("comite INICIAL: ", data);
  const cantWin = data?.boletaCandidatos.modalidad.maxOpciones;
  const boleta = data.boletaCandidatos.boletaModel.encabezadoBoleta;
  console.log("canWin", cantWin);
  const resultados = data?.representanteResultado;
  console.log("Resultados", resultados);
  let total = 0;
  let candidatos = [];

  // Agregar candidatos con votos registrados
  resultados.forEach((res) => {
    const candidatoN = data.boletaCandidatos.candidatoModels.find(
      (cand) => cand.claveCandidato === res.id
    );
    if (candidatoN) {
      candidatos.push({ ...candidatoN, votos: res.candidad });
      total += res.candidad;
    }
  });

  // Agregar candidatos de candidaturas no registradas
  if (data.candidaturasNoRegistradas !== null) {
    data.candidaturasNoRegistradas.forEach((candidatura) => {
      candidatos.push({
        apellidoMCandidato: "",
        apellidoPCandidato: "",
        fotoCandidato: "",
        nombreCandidato: candidatura.id,
        votos: candidatura.candidad,
      });
      total += candidatura.candidad;
    });
  }

  total += data.nulos;

  candidatos.sort((a, b) => b.votos - a.votos); // Ordenar por número de votos de mayor a menor

  let winers = [];
  let empate = false;

  let maxWinnwerValidation =
    candidatos.length < cantWin ? candidatos.length : cantWin;

  console.log("Num Comite", maxWinnwerValidation);

  for (let i = 0; i < maxWinnwerValidation; i++) {
    winers.push({ ...candidatos[i] });

    if (i > 0 && candidatos[i].votos !== candidatos[i - 1].votos) {
      // Verificar si hay empate
      empate = false;
    } else if (i > 0 && candidatos[i].votos === candidatos[i - 1].votos) {
      empate = true;
    }
  }

  let nulo = resultados.find((r) => {
    console.log(r);
    if (r.id === "NULO") return r.candidad;
  });

  console.log("FINAL__", {
    candidatos,
    winers,
    boleta,
    total,
    cnr: data.candidaturasNoRegistradas
      ? data.candidaturasNoRegistradas.length
      : 0,
    nulo: data.nulos ? data.nulos : 0,
    isEmpate: empate,
  });

  return {
    candidatos,
    winers,
    boleta,
    total,
    cnr: data.candidaturasNoRegistradas
      ? data.candidaturasNoRegistradas.length
      : 0,
    nulo: data.nulos ? data.nulos : 0,
    isEmpate: empate,
  };
};

/* const toComite = (data) => {
  console.log("comite INICIAL: ", data);
  const cantWin = data?.boletaCandidatos.modalidad.maxOpciones;
  const boleta = data.boletaCandidatos.boletaModel.encabezadoBoleta;
  console.log("canWin", cantWin);
  const resultados = data?.representanteResultado;
  console.log("Resultados", resultados);
  let total = 0;
  let candidatos = resultados.map((res, index) => {
    total = total + res.candidad;
    const candidatoN = data.boletaCandidatos.candidatoModels.find((cand) => {
      if (cand.claveCandidato === res.id) return res;
    });
    if (candidatoN) return { ...candidatoN, votos: res.candidad };
    else null;
  });

  candidatos = candidatos.filter((cand) => {
    if (cand) return cand;
  });

  if (data.candidaturasNoRegistradas !== null) {
    for (let i = 0; i < data.candidaturasNoRegistradas.length; i++) {
      total = total + data.candidaturasNoRegistradas[i].candidad;
      const nc = {
        apellidoMCandidato: "",
        apellidoPCandidato: "",
        fotoCandidato: "",
        nombreCandidato: data.candidaturasNoRegistradas[i].id,
        votos: data.candidaturasNoRegistradas[i].candidad,
      };
      candidatos.push(nc);
    }
  }

  total = total + data.nulos;

  let newArray = data.representanteResultado;
  newArray.sort((a, b) => {
    return b.candidad - a.candidad;
  });

  let maxWinnwerValidation =
    newArray.length < cantWin ? newArray.length : cantWin;

  let winers = [];
  for (let i = 0; i < maxWinnwerValidation; i++) {
    const ganador = data.boletaCandidatos.candidatoModels.find((gan) => {
      if (gan.claveCandidato === newArray[i].id) return gan;
    });
    winers.push({ ...ganador, votos: newArray[i].candidad });
  }

  let nulo = resultados.find((r) => {
    console.log(r);
    if (r.id === "NULO") return r.candidad;
  });

  return {
    candidatos,
    winers,
    boleta,
    total,
    cnr: data.candidaturasNoRegistradas
      ? data.candidaturasNoRegistradas.length
      : 0,
    nulo: data.nulos ? data.nulos : 0,
  };
}; */

const toRep = (data) => {
  const resultados = data?.representanteResultado;
  const boleta = data.boletaCandidatos.boletaModel.encabezadoBoleta;
  let total = 0;
  let candidatos = [];

  // Agregar candidatos con votos registrados
  resultados.forEach((res) => {
    total = total + res.candidad;
    const candidatoN = data.boletaCandidatos.candidatoModels.find(
      (cand) => cand.claveCandidato === res.id
    );
    if (candidatoN) {
      candidatos.push({ ...candidatoN, votos: res.candidad });
    }
  });

  // Agregar candidatos de candidaturas no registradas
  if (data.candidaturasNoRegistradas !== null) {
    data.candidaturasNoRegistradas.forEach((candidatura) => {
      total = total + candidatura.candidad;
      candidatos.push({
        apellidoMCandidato: "",
        apellidoPCandidato: "",
        fotoCandidato:
          "https://www.jornada.com.mx/ultimas/2021/04/24/politicos-y-candidatos-en-michoacan-bajo-la-mira-del-crimen-organizado-6807.html/cesar.jpg-4686.html/image_large",
        nombreCandidato: candidatura.id,
        votos: candidatura.candidad,
      });
    });
  }

  total += data.nulos ? data.nulos : 0;

  candidatos.sort((a, b) => b.votos - a.votos); // Ordenar por número de votos de mayor a menor

  let ganador;
  let isEmpate = false;
  let empateCandidatos = [];

  if (candidatos.length > 0) {
    ganador = candidatos[0];
    for (let i = 0; i < candidatos.length; i++) {
      if (candidatos[i].votos === ganador.votos) {
        isEmpate = true;
        empateCandidatos.push(candidatos[i]);
      } else {
        break;
      }
    }
  }

  console.log("Final:", {
    candidatos,
    winers: ganador,
    isEmpate,
    empateCandidatos,
    total,
    cnr: data.candidaturasNoRegistradas.length,
    boleta,
    nulo: data.nulos ? data.nulos : 0,
  });

  return {
    candidatos,
    winers: ganador,
    isEmpate,
    empateCandidatos,
    total,
    cnr: data.candidaturasNoRegistradas.length,
    boleta,
    nulo: data.nulos ? data.nulos : 0,
  };
};

/* const toRep = (data) => {
  const resultados = data?.representanteResultado;
  const boleta = data.boletaCandidatos.boletaModel.encabezadoBoleta;
  let total = 0;
  let candidatos = resultados.map((res, index) => {
    total = total + res.candidad;
    const candidatoN = data.boletaCandidatos.candidatoModels.find((cand) => {
      if (cand.claveCandidato === res.id) return res;
    });
    if (candidatoN) return { ...candidatoN, votos: res.candidad };
    else null;
  });

  candidatos = candidatos.filter((cand) => {
    if (cand) return cand;
  });

  for (let i = 0; i < data.candidaturasNoRegistradas.length; i++) {
    total = total + data.candidaturasNoRegistradas[i].candidad;
    const nc = {
      apellidoMCandidato: "",
      apellidoPCandidato: "",
      fotoCandidato:
        "https://www.jornada.com.mx/ultimas/2021/04/24/politicos-y-candidatos-en-michoacan-bajo-la-mira-del-crimen-organizado-6807.html/cesar.jpg-4686.html/image_large",
      nombreCandidato: data.candidaturasNoRegistradas[i].id,
      votos: data.candidaturasNoRegistradas[i].candidad,
    };
    candidatos.push(nc);
  }

  total = total + (data.nulos ? data.nulos : 0);

  let newArray = data.representanteResultado;
  newArray.sort((a, b) => {
    return b.candidad - a.candidad;
  });

  let ganador;
  let isEmpate = false;
  let empateCandidatos = [];

  if (newArray.length > 0) {
    ganador = data.boletaCandidatos.candidatoModels.find((gan) => {
      if (gan.claveCandidato === newArray[0].id) return gan;
    });

    const maxVotes = newArray[0].candidad;
    empateCandidatos = newArray.filter((c) => c.candidad === maxVotes);

    if (empateCandidatos.length > 1) {
      isEmpate = true;
      empateCandidatos = empateCandidatos.map((c) => {
        const candidato = data.boletaCandidatos.candidatoModels.find((can) => {
          if (can.claveCandidato === c.id) return can;
        });
        return candidato;
      });
    }
  }

 

  console.log("Final:", {
    candidatos,
    winers: ganador,
    isEmpate,
    empateCandidatos,
    total,
    cnr: data.candidaturasNoRegistradas.length,
    boleta,
    nulo: data.nulos ? data.nulos : 0,
  });
  return {
    candidatos,
    winers: ganador,
    isEmpate,
    empateCandidatos,
    total,
    cnr: data.candidaturasNoRegistradas.length,
    boleta,
    nulo: data.nulos ? data.nulos : 0,
  };
}; */

const toPlanilla = (data) => {
  console.log("PLANILLA: ", data);

  const resultados = data?.representanteResultado;
  const boleta = data.boletaCandidatos.boletaModel.encabezadoBoleta;
  let total = 0;
  let planillas = resultados.map((res, index) => {
    console.log("plsnills:", res);
    total = total + res.candidad;
    console.log("Total xd:", total);
    const asociacion = data.boletaCandidatos.candidatosAsociaciones.find(
      (cand) => {
        if (cand.idCombinacion === res.id) return res;
      }
    );
    if (asociacion) return { ...asociacion, votos: res.candidad };
    else null;
  });

  total = total + (data.nulos ? data.nulos : 0);

  /*  planillas = planillas.filter((cand) => {
    console.log("desde plan:", cand.candidatos);
    if (cand.candidatos !== undefined) return cand;
  }); */

  if (data.candidaturasNoRegistradas !== null) {
    for (let i = 0; i < data.candidaturasNoRegistradas.length; i++) {
      total = total + data.candidaturasNoRegistradas[i].candidad;
      const nc = {
        apellidoMCandidato: "",
        apellidoPCandidato: "",
        fotoCandidato: "",
        nombreCandidato: data.candidaturasNoRegistradas[i].id,
        votos: data.candidaturasNoRegistradas[i].candidad,
      };
      // planillas.push({ ...nc, asociacionModel: null });
    }
  }

  let newArray = data.representanteResultado;
  newArray.sort((a, b) => {
    return b.candidad - a.candidad;
  });

  let winersId = newArray[0].id;
  let winers = data.boletaCandidatos.candidatosAsociaciones.find((win) => {
    if (winersId === win.idCombinacion) return win;
  });

  planillas.sort((a, b) => b.votos - a.votos); // Ordenar por número de votos de mayor a menor

  let ganador;
  let isEmpate = false;
  let empatePlanillas = [];

  if (planillas.length > 0) {
    ganador = planillas[0];
    for (let i = 0; i < planillas.length; i++) {
      if (planillas[i].votos === ganador.votos) {
        isEmpate = true;
        empatePlanillas.push(planillas[i]);
      } else {
        break;
      }
    }
  }

  console.log("PLANILLA FINAL: ", {
    planillas,
    winers,
    empatePlanillas,
    boleta,
    total,
    isEmpate,
    cnr: data.candidaturasNoRegistradas
      ? data.candidaturasNoRegistradas.length
      : 0,
    nulo: data.nulos ? data.nulos : 0,
  });

  return {
    planillas,
    empatePlanillas,
    winers,
    boleta,
    total,
    isEmpate,
    cnr: data.candidaturasNoRegistradas
      ? data.candidaturasNoRegistradas.length
      : 0,
    nulo: data.nulos ? data.nulos : 0,
  };
};

export const toNoFormal = (data) => {
  console.log("data toNoFORMAL::", data);
  const modalidad = data?.boletaCandidatos?.modalidad.modalidad;
  if (!modalidad) return false;
  if (modalidad === "REPRESENTANTE") {
    const info = toRep(data);
    return { ...info, modalidad };
  } else if (modalidad === "COMITE") {
    const info = toComite(data);
    return { ...info, modalidad };
  } else {
    const info = toPlanilla(data);
    return { ...info, modalidad };
  }
};
