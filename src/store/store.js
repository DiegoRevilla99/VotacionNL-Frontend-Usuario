import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { passwordSlice } from "./password/passwordSlice";
import { verificacionSlice } from "./auth/verificacion/verificacionSlice";
import { votanteSlice } from "./votante/votanteSlice";
import { consultasSlice } from "./resultados-consultas/consultasSlice";
import { formalesSlice } from "./resultados-formales/formalesSlice";
import { noformalesSlice } from "./resultados-noformales/noformalesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    votante: votanteSlice.reducer,
    password: passwordSlice.reducer,
    verficacion: verificacionSlice.reducer,
    consultas: consultasSlice.reducer,
    formales: formalesSlice.reducer,
    noformales: noformalesSlice.reducer,
  },
});
