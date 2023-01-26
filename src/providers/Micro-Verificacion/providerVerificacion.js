
export const verificarFolio = async () => {
	try {
		await timeout(500);
		return { ok: true };
	} catch (error) {
		return { ok: false };
	}
};

export const verificacionRespuesta = async () => {
    try {
		await timeout(500);
		return { ok: true };
	} catch (error) {
		return { ok: false };
	}
};

export const getVerificacionRespuestaFormal = async (uid) => {
    try{
        await timeout(500);
        const boletas = [
            {
                encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
                modalidad: "Formal", //Formales, No Formales, Comite y Planilla
                folio: "123456789",
                candidatos: [
					{ id: 1, sentido: "Juan Manuel Hernandez Perez "},
				],
            }
        ];
        return { ok: true, data: boletas };
	} catch (error) {
		return { ok: false };
	}
};

export const getVerificacionRespuesta = async (uid) => {
    try{
        await timeout(500);
        const boletas = [
            {
                encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
                modalidad: "Formal", //Formales, No Formales, Comite y Planilla
                folio: "1234567890",
                candidatos: [
					{ id: 1, sentido: "Juan Manuel Hernandez Perez "},
					{ id: 2, sentido: "José Antonio Diego Revilla"},
					{ id: 3, sentido: "Melvin Paul González Pascual"},
				],
            }
        ];
        return { ok: true, data: boletas };
	} catch (error) {
		return { ok: false };
	}
};

export const getVerificacionBoletas = async (uid) => {
    try{
        await timeout(500);
        const boletas = {
            encabezado: "Elecciones de gobernador del estado de Nuevo León 2023",
            modalidad: "Formal", //Formales, No Formales, Comite y Planilla
            boletas:[
                {
                    folio: "123456789",
                    candidatos: [
                        { id: 1, sentido: "Juan Manuel Hernandez Perez "},

                    ],
                },
                {
                    folio:'JE22-ORD-GHR42S',
                    candidatos: [
                        { id: 2, sentido: 'Isidoro Arriaga Arriaga'},

                    ],
                },
                {
                    folio:'JE22-ORD-GHR43S',
                    candidatos: [
                        { id: 3, sentido: 'Octaviano Cristobal'},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR44S',
                    candidatos: [
                        { id: 4, sentido: 'Paola Gaspar Hurtado'},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR45S',
                    candidatos: [
                        { id: 5, sentido: 'Melissa Librado Rojas'},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR46S',
                    candidatos: [
                        { id: 6, sentido: 'Karime Nereida Pardo'},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR47S',
                    candidatos: [
                        { id: 7, sentido: 'Elizabeth Cristian Balam'},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR48S',
                    candidatos: [
                        { id: 8, sentido: 'Nahomi Elvia Vilchis'},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR49S',
                    candidatos: [
                        { id: 9, sentido: 'Matias Oropeza Oropeza '},
                    ],
                },
                {
                    folio:'JE22-ORD-GHR410S',
                    candidatos: [
                        { id: 10, sentido: 'Isidoro Arriaga Arriaga'},
                    ],
                },
            ],
        };
        return { ok: true, data: boletas };
    } catch (error) {
        return { ok: false };
    }
};

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
