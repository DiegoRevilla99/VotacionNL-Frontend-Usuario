import { createSlice } from "@reduxjs/toolkit";

export const verificacionSlice = createSlice({
    name: "verificacion",
    initialState: {
        status: "noVerificando", //noVerificando, verificando, checking
        errorMessage: "",
        statusPeticion: "off", //checking, ok, fail, off
        claveVoto: "",
        votos: [],
        votoSelected: {
            id: "",
            fechaEmision: "",
            horaEmision: "",
            idBoleta: "",
            sentido: [],
        },
        boleta: [],
        boletaSelected: {
            encabezado: "",
            modalidad: "", // Formales, No Formales, Comite y Planilla
            folio: "",
            candidato: [], // Nombre por quien se votó [1, 2, 3]
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
        onCheckingVerificacion: (state) => {
            state.status = "checking";
        },
        onVerificando: (state, {payload}) => {
            state.status = "verificando";
            // state.claveVoto = payload.claveVoto;
        },
        onNoVerificando: (state) => {
            state.status = "noVerificando";
        },
        onError: (state, { payload }) => {
            state.errorMessage = payload;
        },
        onFillVoto: (state, { payload }) => {
            state.votos = payload;
        },
        onValidarVoto: (state, { payload }) => {
            state.votoSelected = payload;
        }

    },
});

export const {
    onCheckingPeticion,
    onOkPeticion,
    onFailPeticion,
    onOffPeticion,
    onCheckingVerificacion,
    onVerificando,
    onNoVerificando,
    onError,
    onFillVoto,
    onValidarVoto,
} = verificacionSlice.actions;