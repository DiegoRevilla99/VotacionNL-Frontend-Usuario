import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { ModalTokenVotacion } from "../components/ModalTokenVotacion";

export const InicioVotante = () => {
	const [statusModal, setStatusModal] = useState(false);

	const handleCloseModal = () => setStatusModal(false);

	const handleOpenModal = () => {
		// toastOffOperation();
		setStatusModal(true);
	};
	return (
		<Box display="flex" height="75%" alignItems="center">
			<Container
				maxWidth="md"
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
						Está por iniciar su proceso de votación, una vez comenzado el proceso,
						contará con 10 minútos por boleta/papeleta para realizar su respuesta
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
			</Container>
			<ModalTokenVotacion statusModal={statusModal} handleCloseModal={handleCloseModal} />
		</Box>
	);
};
