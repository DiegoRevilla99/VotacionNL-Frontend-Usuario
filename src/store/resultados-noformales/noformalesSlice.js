import { createSlice } from "@reduxjs/toolkit";

export const noformalesSlice = createSlice({
  name: "noformales",
  initialState: {
    jornadas: [],
    isLoadingJornadas: false,
    isLoadingBoletas: false,
    isLoadingResultados: false,
    resultados: false,
    isLoadingBoleta: false,
    boleta: false,
    boletas: [],
    status: "",
    errorMessage: "",
    statusPeticion: "off",
  },
  reducers: {
    startLoadingJornadas: (state /* action */) => {
      state.isLoadingJornadas = true;
    },
    setJornadas: (state, action) => {
      state.jornadas = action.payload.jornadas;
      state.isLoadingJornadas = false;
    },
    startLoadingResultados: (state /* action */) => {
      state.isLoadingResultados = true;
    },
    setResultados: (state, action) => {
      state.isLoadingResultados = false;
      state.resultados = action.payload.resultados;
    },
    startLoadingBoletas: (state /* action */) => {
      state.isLoadingBoletas = true;
    },
    setBoletas: (state, action) => {
      state.isLoadingBoletas = false;
      state.boletas = action.payload.boletas;
    },
    startLoadingBoleta: (state /* action */) => {
      state.isLoadingBoleta = true;
    },
    setBoleta: (state, action) => {
      state.isLoadingBoleta = false;
      state.boleta = action.payload.boleta;
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
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingBoletas,
  setBoletas,
  startLoadingJornadas,
  setJornadas,
  startLoadingResultados,
  setResultados,
  startLoadingBoleta,
  setBoleta,
} = noformalesSlice.actions;

// export default consultaCiudadanaSlice.reducer;
