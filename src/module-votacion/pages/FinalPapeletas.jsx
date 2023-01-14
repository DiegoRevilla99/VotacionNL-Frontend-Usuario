import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const FinalPapeletas = () => {
	const navigate = useNavigate();

	const handleRegresar = () => {
		navigate("/votacion/inicio");
	};
	return (
		<Box
			display={"flex"}
			flexDirection="column"
			justifyContent="center"
			sx={{
				height: "auto",
				flexGrow: 1,
				overflowY: { sx: "none", md: "auto" },
			}}
			pt="2rem"
			// pb="3rem"
		>
			<Container maxWidth="md">
				<Box
					sx={{
						minHeight: "10rem",
						height: "auto",
						boxShadow: 1,
						backgroundColor: "base.main",
						borderRadius: { xs: "0.5rem", md: "1rem" },
						p: { xs: "1rem", md: "2rem" },
					}}
					height="100%"
				>
					<Box
						display="flex"
						// alignContent="center"
						// alignItems="center"
						height="100%"
						justifyContent="center"
						// alignSelf="center"
					>
						<Typography
							display="flex"
							color="#323232"
							align="center"
							alignContent="center"
							alignItems="center"
							height="100%"
							sx={{
								fontSize: {
									xs: "1.5rem",
									md: "2rem",
								},
							}}
						>
							Gracias por su participación.
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							pt: 2,
						}}
					>
						{/* <Button color="base">Regresar</Button> */}
						<Box sx={{ flex: "1 1 auto" }} />

						<Button
							color="darkButton"
							type="submit"
							variant="contained"
							onClick={handleRegresar}
						>
							Regresar
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
