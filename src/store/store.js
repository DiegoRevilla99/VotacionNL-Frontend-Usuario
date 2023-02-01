import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { passwordSlice } from "./password/passwordSlice";
import { votanteSlice } from "./votante/votanteSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		votante: votanteSlice.reducer,
		password: passwordSlice.reducer,
	},
});
