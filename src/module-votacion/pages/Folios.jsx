import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Folios = () => {
	return (
		<Box
			display={"flex"}
			sx={{
				height: "auto",
				flexGrow: 1,
				overflowY: { sx: "none", md: "auto" },
			}}
			pt="2rem"
			// pb="3rem"
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						minHeight: "10rem",
						height: "auto",
						boxShadow: 1,
						backgroundColor: "base.main",
						borderRadius: { xs: "0.5rem", md: "1rem" },
						p: { xs: "1rem", md: "2rem" },

						pb: "2rem",
					}}
				>
					<Box>
						<Typography
							color="#323232"
							align="center"
							mb="2rem"
							sx={{
								fontSize: {
									xs: "1.5rem",
									md: "2rem",
								},
							}}
						>
							Su voto ha sido registrado correctamente
						</Typography>
						<Typography
							color="error"
							align="center"
							mb="2rem"
							sx={{
								fontSize: {
									xs: "1rem",
									md: "1.5rem",
								},
							}}
						>
							¡Nota importante!
						</Typography>
					</Box>
					<Box
						sx={{
							height: "auto",
							width: "100%",
						}}
						display="flex"
						justifyContent="center"
					>
						<Box
							sx={{
								height: "auto",
								boxShadow: 1,
								backgroundColor: "#323232",
								borderRadius: { xs: "0.5rem", md: "1rem" },
								p: "2rem",
								width: { xs: "100%", md: "85%" },
							}}
							display="flex"
							flexDirection="column"
						>
							<Typography
								color="base.main"
								align="justify"
								mb="2rem"
								sx={{
									fontSize: {
										xs: "1rem",
										md: "1.5rem",
									},
								}}
							>
								Su voto no guardará ningún tipo de relación con su cuenta o su
								nombre, es decir, será completamente anónimo, por esta razón, favor
								de tomar nota de los siguientes folios, los cuales únicamente usted
								conocerá y podrá ingresar en el módulo de verificación para poder
								corroborar que el sentido de su voto es el mismo que al momento de
								su emisión. Estos folios solo se mostrarán por esta única ocación,
								por eso es importante que los guarde de manera adecuada.
							</Typography>
							<Typography color="base.main" align="center" mb="1rem" variant="h6">
								Eleccion para gobernador:
							</Typography>
							<Typography
								color="#323232"
								align="center"
								mb="1rem"
								sx={{
									fontSize: {
										xs: "1rem",
										md: "1.3rem",
									},
									backgroundColor: "base.main",
									p: "1rem",
									borderRadius: "1rem",
								}}
								// variant="h6"
							>
								JE22-ORD-GHR4SZ
							</Typography>
							<Typography color="base.main" align="center" mb="1rem" variant="h6">
								Eleccion para comité:
							</Typography>
							<Typography
								color="#323232"
								align="center"
								mb="1rem"
								sx={{
									fontSize: {
										xs: "1rem",
										md: "1.3rem",
									},
									backgroundColor: "base.main",
									p: "1rem",
									borderRadius: "1rem",
								}}
								// variant="h6"
							>
								JE22-ORD-GHA74G
							</Typography>
							<Typography color="base.main" align="center" mb="1rem" variant="h6">
								Eleccion para senadurías:
							</Typography>
							{/* <Box p="1rem" bgcolor="base.main" display="flex"> */}
							<Typography
								color="#323232"
								align="center"
								mb="1rem"
								sx={{
									fontSize: {
										xs: "1rem",
										md: "1.3rem",
									},
									backgroundColor: "base.main",
									p: "1rem",
									borderRadius: "1rem",
								}}
								// variant="h6"
							>
								JE22-ORD-JDLF87
							</Typography>
							{/* </Box> */}
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
