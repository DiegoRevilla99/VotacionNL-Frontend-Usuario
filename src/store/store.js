import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { votanteSlice } from "./votante/votanteSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		votante: votanteSlice.reducer,
	},
});
