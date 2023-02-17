import { createSlice } from "@reduxjs/toolkit";

export const consultasSlice = createSlice({
  name: "consultas",
  initialState: {
    jornadas: [],
    isLoadingJornadas: false,
    isLoadingPapeletas: false,
    isLoadingResultados: false,
    resultados: false,
    papeletas: [],
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
    startLoadingPapeletas: (state /* action */) => {
      state.isLoadingPapeletas = true;
    },
    setPapeletas: (state, action) => {
      state.isLoadingPapeletas = false;
      state.papeletas = action.payload.papeletas;
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
  startLoadingPapeletas,
  setPapeletas,
  startLoadingJornadas,
  setJornadas,
  startLoadingResultados,
  setResultados,
} = consultasSlice.actions;

// export default consultaCiudadanaSlice.reducer;
