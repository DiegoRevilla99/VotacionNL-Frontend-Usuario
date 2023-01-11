export const emitirVoto = async () => {
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
				votoNulo: true,
				candidaturaNoRegistrada: true,
				candidatos: [
					{ id: 1, nombre: "Juan Manuel Hernandez Perez ", logo: "logo1" },
					{ id: 2, nombre: "José Antonio Diego Revilla", logo: "logo2" },
					{ id: 3, nombre: "Melvin Paul González Pascual", logo: "logo3" },
					{ id: 4, nombre: "Kevin Edilberto Chávez Sanchez", logo: "logo4" },
					{ id: 5, nombre: "Laura Yessenia Sánchez Martínez", logo: "logo5" },
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
					{ id: 1, nombre: "Pedro Manuel Hernandez Perez ", logo: "logo1" },
					{ id: 2, nombre: "Ivan Antonio Diego Revilla", logo: "logo2" },
					{ id: 3, nombre: "Mauricio Paul González Pascual", logo: "logo3" },
					{ id: 4, nombre: "Josué Edilberto Chávez Sanchez", logo: "logo4" },
					{ id: 5, nombre: "Ana María Sánchez Martínez", logo: "logo5" },
					{ id: 6, nombre: "Ana", logo: "logo6" },
					{ id: 7, nombre: "Kevin Edilberto Chávez Sanchez", logo: "logo4" },
					{ id: 8, nombre: "Laura Yessenia Sánchez Martínez", logo: "logo5" },
					{ id: 9, nombre: "Ana", logo: "logo6" },
				],
			},
		];
		return { ok: true, data: boletas };
	} catch (error) {
		return { ok: false };
	}
};

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
