import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import { object, string, ref } from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = object({
	password: string("")
		.min(6, "La contraseña debe tener al menos 6 caracteres")
		.matches(/[0-9]/, "La contraseña debe tener al menos un numero")
		.matches(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
		.matches(/[^\w]/, "La contraseña debe tener al menos un simbolo, por ejemplo: _?!$%&")
		.required("Este campo es requerido"),
	passwordConfirm: string().oneOf([ref("password"), null], "Las contraseñas no coinciden"),
});

export const EstablecerContrasenia = () => {
	const navigate = useNavigate();

	const handleSubmit = () => {
		// Todo: dispatch(savePassword())
		// **exito
		navigate("/auth/success");
	};
	return (
		<Box display="flex" height="100%" alignItems="center">
			<Container
				maxWidth="lg"
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
						Establecer contarseña
					</Typography>
					<Formik
						initialValues={{
							password: "",
							passwordConfirm: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							console.log(values);
							handleSubmit();
						}}
					>
						{({ values, handleSubmit, errors, touched, handleChange }) => (
							<form onSubmit={handleSubmit}>
								<TextField
									name="password"
									value={values.password}
									onChange={handleChange}
									fullWidth
									color="base"
									focused
									variant="outlined"
									label="INGRESA TU CONTRASEÑA"
									type="password"
									error={touched.password && Boolean(errors.password)}
									helperText={touched.password && errors.password}
									sx={{
										"& .MuiInputBase-input": {
											color: "white !important",
										},
									}}
								></TextField>
								<TextField
									name="passwordConfirm"
									value={values.passwordConfirm}
									onChange={handleChange}
									fullWidth
									color="base"
									focused
									variant="outlined"
									label="CONFIRMA TU CONTARSEÑA"
									type="password"
									error={
										touched.passwordConfirm && Boolean(errors.passwordConfirm)
									}
									helperText={touched.passwordConfirm && errors.passwordConfirm}
									sx={{
										marginTop: "2rem",
										"& .MuiInputBase-input": {
											color: "white !important",
										},
									}}
								></TextField>

								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										pt: 2,
									}}
								>
									{/* <Button color="base">Regresar</Button> */}
									<Box sx={{ flex: "1 1 auto" }} />

									<Button color="base" type="submit">
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
