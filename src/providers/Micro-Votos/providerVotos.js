import { consultasAPI } from "../Micro-ConsultasCiudadanas/configConsultas";
import { tokenSmsApi } from "../Micro-Token/configToken";
import { votanteAPI, votanteJornadaAPI } from "../Micro-Votante/votanteConfig";
import { votosAPI } from "./configVotos";

export const emitirVoto = async (values) => {
	try {
		let folios = [];
		for (const voto of values) {
			const { data } = await votosAPI.post("votos_seguros/registrar/boleta", voto);
			const { boletaModel } = data;
			const { folioBoleta, nombreEleccion } = boletaModel;
			folios.push({ folioBoleta, nombreEleccion });
		}

		console.log("FOLIOS", folios);

		return { ok2: true, data: folios };
	} catch (error) {
		return { ok2: false };
	}
};
export const flagJornadaRealizada = async (idJornadaVotante, curp) => {
	try {
		const { data } = await votanteJornadaAPI.put(
			`jornadavotante/${curp}/jornada/${idJornadaVotante}/update/realizacion`,
			{
				flag: true,
			}
		);

		// https://ms-votante.herokuapp.com/jornadavotante/DIRA991216HOCGVN02/jornada/EL-DE-CO-ES-IN-SI-ORD-2023/update/realizacion

		https: console.log("data flag realizada", data);

		return { ok1: true };
	} catch (error) {
		return { ok1: false };
	}
};
export const flagJornadaNoRealizada = async (idJornadaVotante) => {
	try {
		const { data } = await votanteJornadaAPI.put(
			`jornadavotante/${curp}/jornada/${idJornadaVotante}/update/realizacion`,
			{
				flag: false,
			}
		);

		https: console.log("data flag no realizada", data);

		return { ok: true };
	} catch (error) {
		return { ok: false };
	}
};

export const emitirRespuestaConsulta = async () => {
	try {
		await timeout(500);
		return { ok: true };
	} catch (error) {
		return { ok: false };
	}
};

export const comenzarVotacion = async (token, curp) => {
	try {
		const { data } = await tokenSmsApi.get(`sms/validation/${token}/verification/${curp}`);
		console.log("RESPUESTA GET TOKEN", data);
		return { ok: true, data: data.data || "No verificado" };
	} catch (error) {
		return { ok: false };
	}
};

export const getBoletasDeVotante = async (uid) => {
	try {
		await timeout(2000);
		// const boletas = [
		// 	{
		// 		encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
		// 		jornadaElectoral: "Jornada 1",
		// 		entidad: "Nuevo León",
		// 		distritoElectoral: 23,
		// 		municipio: "Municipio 1",
		// 		maxOpciones: 1,
		// 		minOpciones: 1,
		// 		modalidad: "Representante",
		// 		votoNulo: true,
		// 		candidaturaNoRegistrada: true,
		// 		candidatos: [
		// 			{
		// 				id: 1,
		// 				nombrePartido: "PRI",
		// 				nombre: "Juan Manuel Hernandez Perez ",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "BIUB",
		// 				logo: "logo1",
		// 			},
		// 			{
		// 				id: 2,
		// 				nombrePartido: "PAN",
		// 				nombre: "José Antonio Diego Revilla",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "AHDU",
		// 				logo: "logo2",
		// 			},
		// 			{
		// 				id: 3,
		// 				nombrePartido: "PRD",
		// 				nombre: "Melvin Paul González Pascual",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "ASDA",
		// 				logo: "logo3",
		// 			},
		// 			{
		// 				id: 4,
		// 				nombrePartido: "PARTIDO VERDE",
		// 				nombre: "Kevin Edilberto Chávez Sanchez",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "AHSU",
		// 				logo: "logo4",
		// 			},
		// 			{
		// 				id: 5,
		// 				nombrePartido: "MORENA",
		// 				nombre: "Laura Yessenia Sánchez Martínez",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "AUDH",
		// 				logo: "logo5",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		encabezado: "Elecciones del comité del estado de Nuevo León 2023",
		// 		jornadaElectoral: "Jornada 2",
		// 		entidad: "Nuevo León",
		// 		distritoElectoral: 23,
		// 		municipio: "Municipio 1",
		// 		maxOpciones: 3,
		// 		minOpciones: 3,
		// 		votoNulo: true,
		// 		candidaturaNoRegistrada: true,
		// 		candidatos: [
		// 			{
		// 				id: 1,
		// 				nombrePartido: "PRI",
		// 				nombre: "Pedro Manuel Hernandez Perez ",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "DHFY",
		// 				logo: "logo1",
		// 			},
		// 			{
		// 				id: 2,
		// 				nombrePartido: "PAN",
		// 				nombre: "Ivan Antonio Diego Revilla",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "UDYF",
		// 				logo: "logo2",
		// 			},
		// 			{
		// 				id: 3,
		// 				nombrePartido: "PRD",
		// 				nombre: "Mauricio Paul González Pascual",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "IGUE",
		// 				logo: "logo3",
		// 			},
		// 			{
		// 				id: 4,
		// 				nombrePartido: "PARTIDO VERDE",
		// 				nombre: "Josué Edilberto Chávez Sanchez",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "SYRV",
		// 				logo: "logo4",
		// 			},
		// 			{
		// 				id: 5,
		// 				nombrePartido: "MORENA",
		// 				nombre: "Ana María Sánchez Martínez",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "FURB",
		// 				logo: "logo5",
		// 			},
		// 			{
		// 				id: 6,
		// 				nombrePartido: "PSD",
		// 				nombre: "Ana Sofía",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "ASDM",
		// 				logo: "logo6",
		// 			},
		// 			{
		// 				id: 7,
		// 				nombrePartido: "MOVIMIENTO CIUDADANO",
		// 				nombre: "Kevin Edilberto Chávez Sanchez",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "UFBT",
		// 				logo: "logo4",
		// 			},
		// 			{
		// 				id: 8,
		// 				nombrePartido: "FUERZA POR MÉXICO",
		// 				nombre: "Laura Yessenia Sánchez Martínez",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "AOQP",
		// 				logo: "logo5",
		// 			},
		// 			{
		// 				id: 9,
		// 				nombrePartido: "PT",
		// 				nombre: "Ana María",
		// 				nombreSuplente: "Default1",
		// 				clavePartido: "SEHS",
		// 				logo: "logo6",
		// 			},
		// 		],
		// 	},
		// ];

		const boletas = [
			{
				encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
				jornadaElectoral: "Jornada 1",
				entidad: "Nuevo León",
				distritoElectoral: 23,
				municipio: "Municipio 1",
				maxOpciones: 1,
				minOpciones: 1,
				modalidad: "Representante",
				votoNulo: true,
				candidaturaNoRegistrada: true,
				candidatos: [
					{
						id: "HSJD",
						nombrePartido: "PRI",
						nombre: "Juan Manuel Hernandez Perez ",
						nombreSuplente: "Default1",
						clavePartido: "BIUB",
						logo: "logo1",
					},
					{
						id: "AKSF",
						nombrePartido: "PAN",
						nombre: "José Antonio Diego Revilla",
						nombreSuplente: "Default1",
						clavePartido: "AHDU",
						logo: "logo2",
					},
					{
						id: "SKDL",
						nombrePartido: "PRD",
						nombre: "Melvin Paul González Pascual",
						nombreSuplente: "Default1",
						clavePartido: "ASDA",
						logo: "logo3",
					},
					{
						id: "JSUR",
						nombrePartido: "PARTIDO VERDE",
						nombre: "Kevin Edilberto Chávez Sanchez",
						nombreSuplente: "Default1",
						clavePartido: "AHSU",
						logo: "logo4",
					},
					{
						id: "SJDL",
						nombrePartido: "MORENA",
						nombre: "Laura Yessenia Sánchez Martínez",
						nombreSuplente: "Default1",
						clavePartido: "AUDH",
						logo: "logo5",
					},
				],
			},
			{
				encabezado: "Elecciones del comité del estado de Nuevo León 2023",
				jornadaElectoral: "Jornada 2",
				entidad: "Nuevo León",
				distritoElectoral: 23,
				municipio: "Municipio 1",
				maxOpciones: 3,
				minOpciones: 3,
				votoNulo: true,
				candidaturaNoRegistrada: true,
				candidatos: [
					{
						id: "SJDK",
						nombrePartido: "PRI",
						nombre: "Pedro Manuel Hernandez Perez ",
						nombreSuplente: "Default1",
						clavePartido: "DHFY",
						logo: "logo1",
					},
					{
						id: "ALQP",
						nombrePartido: "PAN",
						nombre: "Ivan Antonio Diego Revilla",
						nombreSuplente: "Default1",
						clavePartido: "UDYF",
						logo: "logo2",
					},
					{
						id: "AJSK",
						nombrePartido: "PRD",
						nombre: "Mauricio Paul González Pascual",
						nombreSuplente: "Default1",
						clavePartido: "IGUE",
						logo: "logo3",
					},
					{
						id: "AKSO",
						nombrePartido: "PARTIDO VERDE",
						nombre: "Josué Edilberto Chávez Sanchez",
						nombreSuplente: "Default1",
						clavePartido: "SYRV",
						logo: "logo4",
					},
					{
						id: "AISN",
						nombrePartido: "MORENA",
						nombre: "Ana María Sánchez Martínez",
						nombreSuplente: "Default1",
						clavePartido: "FURB",
						logo: "logo5",
					},
					{
						id: "AKWO",
						nombrePartido: "PSD",
						nombre: "Ana Sofía",
						nombreSuplente: "Default1",
						clavePartido: "ASDM",
						logo: "logo6",
					},
					{
						id: "AKSI",
						nombrePartido: "MOVIMIENTO CIUDADANO",
						nombre: "Kevin Edilberto Chávez Sanchez",
						nombreSuplente: "Default1",
						clavePartido: "UFBT",
						logo: "logo4",
					},
					{
						id: "AORK",
						nombrePartido: "FUERZA POR MÉXICO",
						nombre: "Laura Yessenia Sánchez Martínez",
						nombreSuplente: "Default1",
						clavePartido: "AOQP",
						logo: "logo5",
					},
					{
						id: "AISN",
						nombrePartido: "PT",
						nombre: "Ana María",
						nombreSuplente: "Default1",
						clavePartido: "SEHS",
						logo: "logo6",
					},
				],
			},
		];
		return { ok: true, data: boletas };
	} catch (error) {
		return { ok: false };
	}
};

export const getConsultasDeVotante = async (curp) => {
	try {
		// await timeout(1000);

		const { data } = await consultasAPI.get("jornada/consulta/informacion/completa");

		let consulta1 = {
			nombreJornada: data[0].jornadaModel.nombreJornada,
			entidad: data[0].jornadaModel.entidad,
			papeletas: [],
		};
		let papeletas = [];
		data[0].papeletas.forEach((papeleta) => {
			papeletas.push({
				id: papeleta.estructuraPapeletaModel.idPapeleta,
				asunto: papeleta.estructuraPapeletaModel.nombre,
				distritoElectoral: papeleta.estructuraPapeletaModel.distrito,
				municipio: papeleta.estructuraPapeletaModel.municipio,
				primerFirmanteNombre: papeleta.estructuraPapeletaModel.primerFirmanteNombre,
				primerFirmanteCargo: papeleta.estructuraPapeletaModel.primerFirmanteCargo,
				segundoFirmanteNombre: papeleta.estructuraPapeletaModel.segundoFirmanteNombre,
				segundoFirmanteCargo: papeleta.estructuraPapeletaModel.segundoFirmanteCargo,
				pregunta: {
					idPregunta: papeleta.preguntaModel.idPregunta,
					descPregunta: papeleta.preguntaModel.descPregunta,
					tipoRespuesta: papeleta.preguntaModel.tipoRespuesta,
					subtipo: papeleta.preguntaModel.subtipo,
					opcion1: papeleta.preguntaModel.opcion1,
					opcion2: papeleta.preguntaModel.opcion2,
					opcion3: papeleta.preguntaModel.opcion3,
					opcion4: papeleta.preguntaModel.opcion4,
					opcion5: papeleta.preguntaModel.opcion5,
				},
			});
		});

		consulta1.papeletas = papeletas;

		console.log("DATA CONSULTA", consulta1);

		const consultas = {
			nombreJornada: "Consulta ciudadana 2023",
			entidad: "Nuevo León",
			papeletas: [
				{
					id: 1,
					asunto: "Papeleta 1",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 1,
						descPregunta:
							"¿Estás de acuerdo en que a Andrés Manuel López Obrador, Presidente de los Estados Unidos Mexicanos, se le revoque el mandato por pérdida de la confienza o soga en la Presidencia de la República hasta que termine su periodo?",
						tipoRespuesta: "cerrada",
						subtipo: "escalaDeLikert",
						opcion1: "Totalmente en desacuerdo",
						opcion2: "En desacuerdo",
						opcion3: "Neutral",
						opcion4: "De acuerdo",
						opcion5: "Totalmente de acuerdo",
					},
				},
				{
					id: 2,
					asunto: "Papeleta 2",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 2,
						descPregunta: "Te gusta la nueva presidencia?",
						tipoRespuesta: "cerrada",
						subtipo: "3respuestas",
						opcion1: "De acuerdo",
						opcion2: "Neutral",
						opcion3: "En desacuerdo",
						opcion4: "",
						opcion5: "",
					},
				},
				{
					id: 3,
					asunto: "Papeleta 3",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 3,
						descPregunta: "Pregunta 3?",
						tipoRespuesta: "cerrada",
						subtipo: "2respuestas",
						opcion1: "",
						opcion2: "",
						opcion3: "",
						opcion4: "",
						opcion5: "",
					},
				},
				{
					id: 4,
					asunto: "Papeleta 4",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 3,
						descPregunta: "Pregunta 4?",
						tipoRespuesta: "cerrada",
						subtipo: "personalizado1",
						opcion1: "Me gusta",
						opcion2: "No me gusta",
						opcion3: "",
						opcion4: "",
						opcion5: "",
					},
				},
				{
					id: 5,
					asunto: "Papeleta 5",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 4,
						descPregunta: "Pregunta 5?",
						tipoRespuesta: "cerrada",
						subtipo: "personalizado2",
						opcion1: "Me gusta",
						opcion2: "Neutral",
						opcion3: "No me gusta",
						opcion4: "",
						opcion5: "",
					},
				},
				{
					id: 6,
					asunto: "Papeleta 6",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 5,
						descPregunta: "Pregunta 6?",
						tipoRespuesta: "cerrada",
						subtipo: "personalizado3",
						opcion1: "Me gusta",
						opcion2: "Neutral",
						opcion3: "No me gusta",
						opcion4: "Opcion 4",
						opcion5: "Opcion 5",
					},
				},
				{
					id: 7,
					asunto: "Papeleta 7",
					distritoElectoral: 23,
					municipio: "Municipio 1",
					pregunta: {
						idPregunta: 5,
						descPregunta: "Pregunta 6?",
						tipoRespuesta: "abierta",
						subtipo: "",
						opcion1: "",
						opcion2: "",
						opcion3: "",
						opcion4: "",
						opcion5: "",
					},
				},
			],
		};

		return { ok: true, data: consulta1 };
	} catch (error) {
		console.log(error.message);
		return { ok: false };
	}
};

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const endpoint = {
	jornadaFormal: {
		votanteTieneJornadaRelacionada: true,
		votantePuedeRealizarLaVotacion: true, //(Este campo lo van a activar unicamente si el votante ya verificó por completo su cuenta)
		nombreDeLaJornadaAVotar: "Jornada Formal 1",
		configuracionDeJornada: {
			fechaYHoraDeInicioDeJornada: "1997-07-16T19:20:30.45+01:00",
			fechaYHoraDeFinDeJornada: "1997-09-16T19:20:30.45+01:00",
			tiempoParaContestarBoletas: "30:00",
			tiempoExtra: "10:00",
		},
	},
	jornadaNoFormal: {
		votanteTieneJornadaRelacionada: true,
		votantePuedeRealizarLaVotacion: true, //(Este campo lo van a activar unicamente si el votante ya verificó por completo su cuenta)
		nombreDeLaJornadaAVotar: "Jornada Formal 1",
		configuracionDeJornada: {
			fechaYHoraDeInicioDeJornada: "1997-07-16T19:20:30.45+01:00",
			fechaYHoraDeFinDeJornada: "1997-09-16T19:20:30.45+01:00",
			tiempoParaContestarBoletas: "30:00",
			tiempoExtra: "10:00",
		},
	},
	consultaCiudadana: {
		votanteTieneConsultaRelacionada: true,
		votantePuedeRealizarLaConsulta: true, //(Este campo lo van a activar unicamente si el votante ya verificó por completo su cuenta)
		nombreDeLaConsultaAVotar: "Consulta 1",
		configuracionDeConsulta: {
			fechaYHoraDeInicioDeConsulta: "1997-07-16T19:20:30.45+01:00",
			fechaYHoraDeFinDeConsulta: "1997-09-16T19:20:30.45+01:00",
			tiempoParaContestarPapeletas: "30:00",
			tiempoExtra: "10:00",
		},
	},
};

const boletasFormales = [
	{
		encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
		coaliciones: [
			{
				id: 1,
				nombreCoalicion: "Coalicion 1",
				idPartidos: [1, 2],
			},
			{
				id: 2,
				nombreCoalicion: "Coalicion 2",
				idPartidos: [3, 4],
			},
		],
		partidos: [
			{
				id: 1,
				partido: "PRI",
				nombre: "Juan Manuel Hernandez Perez ",
				nombreSuplente: "Default1",
				logo: "logo1",
			},
			{
				id: 2,
				partido: "PAN",
				nombre: "José Antonio Diego Revilla",
				nombreSuplente: "Default1",
				logo: "logo2",
			},
			{
				id: 3,
				partido: "PRD",
				nombre: "José Antonio Diego Revilla",
				nombreSuplente: "Default1",
				logo: "logo2",
			},
			{
				id: 4,
				partido: "MORENA",
				nombre: "José Antonio Diego Revilla",
				nombreSuplente: "Default1",
				logo: "logo2",
			},
			{
				id: 5,
				partido: "PARTIDO VERDE",
				nombre: "José Antonio Diego Revilla",
				nombreSuplente: "Default1",
				logo: "logo2",
			},
		],
	},
];

const estrucNoFormal = [
	{
		encabezado: "Elecciones del comité del estado de Nuevo León 2023",
		modalidad: "comite",
		maxOpciones: 3,
		minOpciones: 2,
		votoNulo: true,
		candidaturaNoRegistrada: false,
		asociaciones: [
			{
				id: 1,
				nombreAsociacione: "asociacion 1",
				idPartidos: [1, 2],
			},
			{
				id: 2,
				nombreAsociacione: "asociacion 2",
				idPartidos: [3, 4],
			},
		],
		candidatos: [
			{
				id: 1,
				nombre: "Pedro Manuel Hernandez Perez ",
				nombreSuplente: "Default1",
				logo: "logo1",
			},
			{
				id: 2,
				nombre: "Ivan Antonio Diego Revilla",
				nombreSuplente: "Default1",
				logo: "logo2",
			},
			{
				id: 3,
				nombre: "Mauricio Paul González Pascual",
				nombreSuplente: "Default1",
				logo: "logo3",
			},
		],
	},
];
