import { createSlice } from "@reduxjs/toolkit";

export const verificacionSlice = createSlice({
    name: "verificacion",
    initialState: {
        status: "noVerificando", //noVerificando, verificando, checking
        errorMessage: "",
        statusPeticion: "off", //checking, ok, fail, off
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
        onVerificando: (state) => {
            state.status = "verificando";
        },
        onNoVerificando: (state) => {
            state.status = "noVerificando";
        },
        onError: (state, { payload }) => {
            state.errorMessage = payload;
        },
        onFillBoletas: (state, { payload }) => {
            state.boletas = payload;
        },
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
    onFillBoletas,
} = verificacionSlice.actions;