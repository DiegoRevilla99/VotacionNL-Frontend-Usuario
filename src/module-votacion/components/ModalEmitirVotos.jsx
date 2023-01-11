import { Container, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: { xs: "95%", md: "50%" },
	bgcolor: "background.paper",
	borderRadius: "2rem",
	boxShadow: 3,
	p: 4,
	pb: 1,
	// height: "90%",
};

let contador = 0;
const velocidad = 500;

export const ModalEmitirVotos = ({ modalStatus }) => {
	const [tick, setTick] = useState(contador);
	useEffect(() => {
		const interval = setInterval(() => {
			contador++;
			setTick(contador);
			if (contador === 3) contador = 0;
		}, velocidad);

		return () => clearInterval(interval);
	}, []);

	return (
		<Modal
			open={modalStatus}
			// onClose={closeModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box sx={{ overflowY: "auto", height: "100%" }}>
					<Box>
						<Typography
							id="modal-modal-title"
							variant="h4"
							color="#323232"
							align="center"
							display="flex"
							justifyContent="center"
							// justifyItems="center"
							// alignContent="center"
							// alignItems="center"
						>
							Emitiendo votos
						</Typography>
						<Typography
							variant="h4"
							color="#323232"
							display="flex"
							justifyContent="center"
						>
							{tick === 1 ? "." : tick === 2 ? ".." : tick === 3 ? "..." : ""}
						</Typography>
					</Box>
					<Box m={"2rem"}>
						<Typography variant="body1" color="initial" align="center">
							Este proceso puede tardar unos segundos.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};
