import {
	Box,
	Button,
	CircularProgress,
	Container,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { onComenzarVotacion } from "../../store/votante/votanteThunks";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	// width: "70rem",
	bgcolor: "background.paper",
	borderRadius: "2rem",
	boxShadow: 3,
	p: 4,
	height: "auto",
};

const validationSchema = object({
	token: string("")
		.min(6, "El token debe tener un tamaño de 6 digitos")
		.max(6, "El token debe tener un tamaño máximo de 6 digitos")
		.required("Este campo es requerido"),
});

export const ModalTokenVotacion = ({ statusModal, handleCloseModal }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { status } = useSelector((state) => state.votante);

	const onCancel = () => {
		// setIsCerrada(false);
		// setQuestionsSelectedNull();
		handleCloseModal();
	};

	const handleSubmit = (values) => {
		dispatch(onComenzarVotacion(values, () => navigate("/votacion/boletas")));
	};

	return (
		<Modal
			open={statusModal}
			onClose={onCancel}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Container maxWidth="sm" sx={style}>
				<Box sx={{ overflowY: "auto", height: "100%" }}>
					<Typography id="modal-modal-title" variant="h5" color="initial" align="center">
						INGRESA TU TOKEN DE VERIFICACIÓN
					</Typography>
					<Box m={"2rem"}>
						<Typography variant="subtitle2" align="justify">
							El token de verificación es una pequeña secuencia de numeros que ha sido
							enviada a tu correo electrónico. Para poder ingresar al módulo de
							votación, deberás copiar el token de verificación en el siguiente campo
						</Typography>

						<Formik
							initialValues={{
								token: "",
							}}
							validationSchema={validationSchema}
							onSubmit={(values) => {
								handleSubmit(values);
							}}
						>
							{({ values, handleSubmit, handleChange, errors, touched }) => (
								<form onSubmit={handleSubmit}>
									<TextField
										label="Token de verificación"
										name="token"
										onChange={handleChange}
										values={values.token}
										fullWidth
										// color="base"
										variant="outlined"
										type="text"
										error={touched.token && Boolean(errors.token)}
										helperText={touched.token && errors.token}
										sx={{ marginTop: "2rem" }}
									/>
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											pt: 4,
										}}
									>
										<Button
											color="error"
											variant="outlined"
											disabled={status === "checking" ? true : false}
										>
											Reenviar Token
										</Button>
										<Box sx={{ flex: "1 1 auto" }} />

										<Button
											color="darkButton"
											variant="outlined"
											type="submit"
											sx={{
												"&.Mui-disabled": {
													color: "#f8f7f3 !important",
													border: "1px solid #f8f7f3 !important",
												},
											}}
											disabled={status === "checking" ? true : false}
											startIcon={
												status === "checking" ? (
													<CircularProgress color="darkButton" />
												) : (
													""
												)
											}
										>
											{status === "checking" ? "" : "Ingresar"}
										</Button>
									</Box>
								</form>
							)}
						</Formik>
					</Box>
				</Box>
			</Container>
		</Modal>
	);
};
