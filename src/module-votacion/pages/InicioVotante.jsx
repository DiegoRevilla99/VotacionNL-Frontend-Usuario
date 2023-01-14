import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onComenzarConsulta } from "../../store/votante/votanteThunks";
import { ModalTokenVotacion } from "../components/ModalTokenVotacion";

export const InicioVotante = () => {
	const [statusModal, setStatusModal] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleCloseModal = () => setStatusModal(false);

	const handleOpenModal = () => {
		// toastOffOperation();
		setStatusModal(true);
	};

	const handleConsultaCiudadana = () => {
		dispatch(onComenzarConsulta("", navigate("/votacion/papeletas")));
	};
	return (
		<Box display="flex" height="75%" alignItems="center">
			<Container
				maxWidth="lg"
				// sx={{
				// 	minHeight: "10rem",
				// 	height: "auto",
				// 	boxShadow: 1,
				// 	backgroundColor: "white",
				// 	borderRadius: { xs: "0.5rem", md: "1rem" },
				// 	p: "2rem",
				// 	// pl: "2rem",
				// }}
			>
				<Grid
					container
					display="flex"
					spacing={5}
					// flexDirection="row"
					// alignItems="center"
					// justifyContent="center"
				>
					<Grid item xs={6}>
						{/* 1 */}
					</Grid>
					<Grid item xs={6}>
						{/* 2 */}
					</Grid>
					<Grid item xs={6}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							sx={{
								minHeight: "10rem",
								height: "auto",
								boxShadow: 1,
								backgroundColor: "white",
								borderRadius: { xs: "0.5rem", md: "1rem" },
								p: "2rem",
								// pl: "2rem",
							}}
						>
							<Typography
								variant="h5"
								color="#323232"
								display="flex"
								justifyContent="center"
								align="justify"
								mb="2rem"
							>
								Comenzar proceso de votación
							</Typography>
							<Button
								variant="contained"
								size="large"
								color="darkButton"
								onClick={handleOpenModal}
								sx={{
									boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
									transition: "all 0.5s ease",
									// backgroundColor: "#543884",
									width: { xs: "100%", md: "30%" },
									// borderRadius: "2rem 2rem 2rem 2rem",
									"&:hover": {
										// backgroundColor: "#7E328B !important",
										transform: "translate(-5px, -5px)",
										boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
									},
								}}
							>
								COMENZAR VOTACIÓN
							</Button>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							sx={{
								minHeight: "10rem",
								height: "auto",
								boxShadow: 1,
								backgroundColor: "white",
								borderRadius: { xs: "0.5rem", md: "1rem" },
								p: "2rem",
								// pl: "2rem",
							}}
						>
							<Typography
								variant="h5"
								color="#323232"
								display="flex"
								justifyContent="center"
								align="justify"
								mb="2rem"
							>
								Comenzar consulta ciudadana
							</Typography>
							<Button
								variant="contained"
								size="large"
								color="darkButton"
								onClick={handleConsultaCiudadana}
								sx={{
									boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
									transition: "all 0.5s ease",
									// backgroundColor: "#543884",
									width: { xs: "100%", md: "30%" },
									// borderRadius: "2rem 2rem 2rem 2rem",
									"&:hover": {
										// backgroundColor: "#7E328B !important",
										transform: "translate(-5px, -5px)",
										boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
									},
								}}
							>
								COMENZAR CONSULTA
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<ModalTokenVotacion statusModal={statusModal} handleCloseModal={handleCloseModal} />
		</Box>
	);
};
