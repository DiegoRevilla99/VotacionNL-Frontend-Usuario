import { createSlice } from "@reduxjs/toolkit";

export const verificacionSlice = createSlice({
    name: "verificacion",
    initialState: {
        // status: "noVerificado", //checking verficado noVerificado
        status: "", //noVerificando, verificando, checking
        errorMessage: "",
        statusPeticion: "off", //checking, ok, fail, off
        claveVoto: "",
        jornadasFolio: [],
        eleccionesFolio: [],
        consultasFolio: [],
        jornadaSelected: {
			id: "",
			title: "",
			nombre: "",
			boletas: [],
			boletaSelected: {},
		},
        votos: [],
        votoSelected: {
            id: "",
            fechaEmision: "",
            horaEmision: "",
            idBoleta: "",
            sentido: [],
        },
    },
    reducers: {
        onCheckingPeticion: (state) => {
            state.statusPeticion = "checking";
        },
        onOkPeticion: (state) => {
            state.statusPeticion = "ok";
        },
        onFailPeticion: (state) => {
            state.statusPeticion = "fail";
        },
        onOffPeticion: (state) => {
            state.statusPeticion = "off";
        },
        OnClearError: (state) => {
            state.errorMessage = "";
        },
        onCheckingVerificacion: (state) => {
            state.status = "checking";
        },
        onVerificado: (state, {payload}) => {
            state.status = "verificado";
            // state.claveVoto = payload.claveVoto;
        },
        onNoVerificando: (state) => {
            state.status = "noVerificado";
        },
        onError: (state, { payload }) => {
            state.status = "noVerificado";
            state.errorMessage = payload;
        },
        onFillVoto: (state, { payload }) => {
            console.log("PAYLOAD", payload);
            state.votos = payload;
        },
        onValidarVoto: (state, { payload }) => {
            state.votoSelected = payload;
        },
        onFillJornadaSentidos: (state, { payload }) => {
            console.log("PAYLOAD", payload);
            state.jornadasFolio = payload;
        },
        onFillConsultas: (state, { payload }) => {
            console.log("PAYLOAD", payload);
            state.consultasFolio = payload;
        },
        onFillEleccionesSentidos: (state, { payload }) => {
            console.log("PAYLOAD", payload);
            state.eleccionesFolio = payload;
        },
        onSetJornadaSelected: (state, { payload }) => {
			console.log(payload);
			state.jornadaSelected.id = payload.id;
			state.jornadaSelected.title = payload.title;
			state.jornadaSelected.boletas = payload.boletas || [];
		},
    },
});

export const {
    onCheckingPeticion,
    onOkPeticion,
    onFailPeticion,
    onOffPeticion,
    onCheckingVerificacion,
    onVerificado,
    onNoVerificando,
    onSetJornadaSelected,
    OnClearError,
    onError,
    onFillVoto,
    onValidarVoto,
    onFillJornadaSentidos,
    onFillConsultas,
    onFillEleccionesSentidos,
} = verificacionSlice.actions;