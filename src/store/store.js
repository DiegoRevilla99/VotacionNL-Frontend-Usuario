import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { passwordSlice } from "./password/passwordSlice";
import { verificacionSlice } from "./auth/verificacion/verificacionSlice";
import { votanteSlice } from "./votante/votanteSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		votante: votanteSlice.reducer,
		password: passwordSlice.reducer,
		verficacion: verificacionSlice.reducer,
	},
});
