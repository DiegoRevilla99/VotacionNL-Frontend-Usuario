import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const purpleTheme = createTheme({
	palette: {
		base: {
			main: "#f8f7f3",
		},
		primary: {
			main: "#543884", //7e328b
		},
		secondary: {
			main: "#543884",
		},
		error: {
			main: red.A700,
		},
	},
});
