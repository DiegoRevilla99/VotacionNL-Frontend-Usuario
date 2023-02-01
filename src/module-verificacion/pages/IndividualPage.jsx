import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

const validationSchema = object({
	folio: string("").required("Este campo es requerido").matches(/^[a-zA-Z0-9-]+$/, "Solo se permiten números, letras y guiones")
});

export const IndividualPage = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	// const { status } = useSelector((state) => state.verificacion);
	
	const onSubmit = (values) => {
		// Todo: dispatch(iniciarSesionConEmail())
		// dispatch(
		// 	onLoginWithEmailAndPassword(values.curp, values.password, () =>
		// 		navigate("/votacion/inicio")
		// 	)
		// );
		// **exito
		console.log(values);
		navigate("/verificacion/individual/FoundFolio");
	};
	const onCancel = () => {
		navigate("/verificacion");
	};

	return (
		<Box pt="1.5rem">
			<Container
				maxWidth="lg"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "4rem",
					pl: "2rem",
				}}
			>
				<Box sx={{ width: "100%" }}>
					<Typography
						color="initial"
						mb="1rem"
						align="center"
						sx={{
							fontSize: {
								xs: "1.5rem",
								sm: "1.3rem",
								md: "1.3rem",
								lg: "2rem",
								xl: "2rem",
							},
						}}
					>
						INGRESE EL FOLIO DE SU BOLETA ELECTRÓNICA
					</Typography>
                    <Formik
						initialValues={{
							folio: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							onSubmit(values);
						}}
					>
						{({ values, handleSubmit, errors, touched, handleChange }) => (
							<form onSubmit={handleSubmit}>

								<TextField
									name="folio"
									value={values.folio}
									onChange={handleChange}
									fullWidth
									focused
									variant="outlined"
									label="Ingresa el folio"
									type="text"
									error={touched.folio && Boolean(errors.folio)}
									helperText={touched.folio && errors.folio}
								></TextField>
								<Box 
									sx={{ display: 'flex', 
										flexDirection: {
												xs: "column",
												sm: "row",
												md: "row",
												lg: "row",
												xl: "row",
											}, 
										pt: 2 }}
									>
								<Button
									onClick={onCancel}
									startIcon={<ReplyIcon size="large" fontSize="inherit"/>}
									color="inherit"
									sx={{ mr: 1,
										fontSize: {
											xl: "1rem",
											lg: "1rem",
											sm: "1rem",
											xs: "1rem",
										}, }}
									>
									Regresar
								</Button>
								<Box sx={{ flex: '1 1 auto' }} 
									marginBottom={{xs: "1rem"}}/>
									<Button 
									disabled={status === "checking" ? true : false}
									startIcon={
										status === "checking" ? (
											<CircularProgress color="base" />
										) : (
											""
										)
									}
									type="submit"
									endIcon={<SendIcon size="large" fontSize="inherit"/>}
									sx={{
										backgroundColor: "#511079",
										borderRadius: "10px 10px 10px 10px",
										color: "#fff",
										fontSize: {
											xl: "1rem",
											lg: "1rem",
											sm: "1rem",
											xs: "1rem",
										},
										textAlign: "center",
										width: {
											xs: "100%",
											sm: "70%",
											md: "50%",
											lg: "40%",
											xl: "40%",
										},
										"&:hover": {
											background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
											color: "#FFFFFF",
											boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
											transform: "translate(-3px, -3px)",
											transition: "all 0.5s ease",
										},
									}}>
									Solicita tu verificación
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
