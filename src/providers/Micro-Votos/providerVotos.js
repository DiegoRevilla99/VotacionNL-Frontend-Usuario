export const emitirVoto = async () => {
	try {
		await timeout(500);
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

export const comenzarVotacion = async () => {
	try {
		await timeout(500);
		return { ok: true };
	} catch (error) {
		return { ok: false };
	}
};

export const getBoletasDeVotante = async (uid) => {
	try {
		await timeout(500);
		const boletas = [
			{
				encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
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
						id: 1,
						nombre: "Juan Manuel Hernandez Perez ",
						nombreSuplente: "Default1",
						logo: "logo1",
					},
					{
						id: 2,
						nombre: "José Antonio Diego Revilla",
						nombreSuplente: "Default1",
						logo: "logo2",
					},
					{
						id: 3,
						nombre: "Melvin Paul González Pascual",
						nombreSuplente: "Default1",
						logo: "logo3",
					},
					{
						id: 4,
						nombre: "Kevin Edilberto Chávez Sanchez",
						nombreSuplente: "Default1",
						logo: "logo4",
					},
					{
						id: 5,
						nombre: "Laura Yessenia Sánchez Martínez",
						nombreSuplente: "Default1",
						logo: "logo5",
					},
				],
			},
			{
				encabezado: "Elecciones del comité del estado de Nuevo León 2023",
				entidad: "Nuevo León",
				distritoElectoral: 23,
				municipio: "Municipio 1",
				maxOpciones: 3,
				minOpciones: 3,
				votoNulo: true,
				candidaturaNoRegistrada: true,
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
					{
						id: 4,
						nombre: "Josué Edilberto Chávez Sanchez",
						nombreSuplente: "Default1",
						logo: "logo4",
					},
					{
						id: 5,
						nombre: "Ana María Sánchez Martínez",
						nombreSuplente: "Default1",
						logo: "logo5",
					},
					{ id: 6, nombre: "Ana", nombreSuplente: "Default1", logo: "logo6" },
					{
						id: 7,
						nombre: "Kevin Edilberto Chávez Sanchez",
						nombreSuplente: "Default1",
						logo: "logo4",
					},
					{
						id: 8,
						nombre: "Laura Yessenia Sánchez Martínez",
						nombreSuplente: "Default1",
						logo: "logo5",
					},
					{ id: 9, nombre: "Ana", nombreSuplente: "Default1", logo: "logo6" },
				],
			},
		];
		return { ok: true, data: boletas };
	} catch (error) {
		return { ok: false };
	}
};

export const getConsultasDeVotante = async (uid) => {
	try {
		await timeout(500);
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
		return { ok: true, data: consultas };
	} catch (error) {
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
