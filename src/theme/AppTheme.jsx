// import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { purpleTheme } from "./purpleTheme";

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={purpleTheme}>
			<CssBaseline></CssBaseline>
			{children}
		</ThemeProvider>
	);
};
