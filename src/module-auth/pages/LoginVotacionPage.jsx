import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { object, string, ref } from "yup";

const validationSchema = object({
	curp: string("").required("Este campo es requerido"),
	password: string("").required("Este campo es requerido"),
});

export const LoginVotacionPage = () => {
	const navigate = useNavigate();

	const handleSubmit = () => {
		// Todo: dispatch(iniciarSesionConEmail())
		// **exito
		navigate("/votacion/inicio");
	};
	return (
		<Box display="flex" height="100%" alignItems="center">
			<Container
				maxWidth="sm"
				sx={{
					minHeight: "10rem",
					height: "auto",
					boxShadow: 1,
					backgroundColor: "#323232",
					borderRadius: { xs: "0.5rem", md: "1rem" },
					p: "2rem",
					// pl: "2rem",
				}}
			>
				<Box>
					<Typography
						variant="h5"
						color="base.main"
						display="flex"
						justifyContent="center"
						mb="2rem"
					>
						INICIAR SESIÓN
					</Typography>

					<Formik
						initialValues={{
							curp: "",
							password: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							console.log(values);
							handleSubmit();
						}}
					>
						{({ values, handleSubmit, errors, touched, handleChange }) => (
							<form onSubmit={handleSubmit}>
								<Typography
									variant="h6"
									color="base.main"
									display="flex"
									justifyContent="center"
									mb="1rem"
								>
									Curp
								</Typography>
								<TextField
									name="curp"
									value={values.curp}
									onChange={handleChange}
									fullWidth
									color="base"
									focused
									variant="outlined"
									label="Ingresa tu CURP"
									type="text"
									error={touched.curp && Boolean(errors.curp)}
									helperText={touched.curp && errors.curp}
									sx={{
										// position: "sticky",
										"& .MuiInputBase-input": {
											// position: "relative",
											// zIndex: 0,
											color: "white !important",
											// backgroundColor: "black !important",
										},
									}}
								></TextField>
								<Typography
									variant="h6"
									color="base.main"
									display="flex"
									justifyContent="center"
									mt="2rem"
									mb="1rem"
								>
									Contraseña
								</Typography>

								<TextField
									name="password"
									value={values.password}
									onChange={handleChange}
									fullWidth
									color="base"
									focused
									variant="outlined"
									label="Ingresa tu contraseña"
									type="password"
									error={touched.password && Boolean(errors.password)}
									helperText={touched.password && errors.password}
									sx={{
										"& .MuiInputBase-input": {
											color: "white !important",
										},
									}}
								></TextField>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										pt: 4,
									}}
								>
									<Button color="error" variant="outlined">
										Regresar
									</Button>
									<Box sx={{ flex: "1 1 auto" }} />

									<Button color="base" variant="outlined" type="submit">
										Confirmar
									</Button>
								</Box>
							</form>
						)}
					</Formik>
				</Box>
			</Container>
		</Box>
	);
};
