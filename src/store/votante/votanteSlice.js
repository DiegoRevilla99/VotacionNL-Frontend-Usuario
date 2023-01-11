import { createSlice } from "@reduxjs/toolkit";

export const votanteSlice = createSlice({
	name: "votante",
	initialState: {
		status: "noVotando", //noVotando, votando, checking
		errorMessage: "",
		statusPeticion: "off", //checking, ok, fail, off
		boletas: [],
		boletaActual: {
			candidatos: [],
		},
		votos: [],
		candidaturaNoRegistrada: [],
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
		onCheckingVotante: (state) => {
			state.status = "checking";
		},
		onVotando: (state) => {
			state.status = "votando";
		},
		onNoVotando: (state) => {
			state.status = "noVotando";
		},
		onError: (state, { payload }) => {
			state.errorMessage = payload;
		},
		onFillBoletas: (state, { payload }) => {
			state.boletas = payload;
		},
		onSetBoletaActual: (state, { payload }) => {
			state.boletaActual = state.boletas[payload - 1];
		},
		onAddVoto: (state, { payload }) => {
			state.votos[payload.noBoleta - 1] = [].concat(payload.seleccionados);
		},
		onAddCandidaturaNoRegistrada: (state, { payload }) => {
			state.candidaturaNoRegistrada[payload.noBoleta - 1] = payload.candidaturaNoRegistrada;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	onCheckingVotante,
	onVotando,
	onNoVotando,
	onError,
	onFillBoletas,
	onCheckingPeticion,
	onOkPeticion,
	onFailPeticion,
	onOffPeticion,
	onSetBoletaActual,
	onAddVoto,
	onAddCandidaturaNoRegistrada,
} = votanteSlice.actions;

// export default consultaCiudadanaSlice.reducer;
