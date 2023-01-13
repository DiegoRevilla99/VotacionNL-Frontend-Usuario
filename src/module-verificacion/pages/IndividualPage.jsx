import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";
import { ModalNotFound } from "../components/ModalNotFound";
import { useState } from "react";
const validationSchema = object({
	// folio: string("").required("Este campo es requerido"),
});

export const IndividualPage = () => {
	const navigate = useNavigate();
	const onSubmit = (values) => {
		console.log(values);
		// navigate("/verificacion/individual/FoundFolio");
		handleOpenModal();
		// navigate("/verificacion/individual/notFoundFolio");
	};
	const onCancel = () => {
		navigate("/verificacion");
	};

	const [statusModal, setStatusModal] = useState(false);
	const handleCloseModal = () => setStatusModal(false);
	const handleOpenModal = () => {
		// toastOffOperation();
		setStatusModal(true);
		};
	return (
		<Box pt="3rem">
			<Container
				maxWidth="lg"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "2rem",
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
						INGRESE EL FOLIO DE SU BOLETA
					</Typography>
                    <Formik
						initialValues={{
							folio: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							// console.log(values);
							onSubmit(values);
							// handleSubmit(values);
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
                                <Box pt="2rem"
                                align="center">
									<Button 
									type="submit"
									endIcon={<SendIcon size="large"/>}
									sx={{
										backgroundColor: "#511079",
										borderRadius: "10px 10px 10px 10px",
										color: "#fff",
										fontSize: {
											xl: "1.1rem",
											lg: "1.1rem",
											sm: "1.1rem",
											xs: "1.1rem",
										},
										textAlign: "center",
										width: "25rem",
										height: "3.5rem",
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
									<Button 
									onClick={onCancel}
									startIcon={<ReplyIcon size="large"/>}
									sx={{
										backgroundColor: "#511079",
										borderRadius: "10px 10px 10px 10px",
										color: "#fff",
										fontSize: {
											xl: "1.1rem",
											lg: "1.1rem",
											sm: "1.1rem",
											xs: "1.1rem",
										},
										textAlign: "center",
										width: "15rem",
										height: "3.5rem",
										"&:hover": {
											background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
											color: "#FFFFFF",
											boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
											transform: "translate(-3px, -3px)",
											transition: "all 0.5s ease",
										},
									}}>
									Regresar
									</Button>
                                </Box>
							</form>
						)}
					</Formik>
				</Box>
				<ModalNotFound statusModal={statusModal} handleToggleModal={handleCloseModal} />

			</Container>
		</Box>
	);
};
