import {
	Box,
	Button,
	Container,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	Modal,
	OutlinedInput,
	Typography,
} from "@mui/material";
// import "cropperjs/src/css/cropper.css";
import "cropperjs/dist/cropper.css";
import React from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	// width: "70rem",
	height: "90%",
	bgcolor: "background.paper",
	borderRadius: "2rem",
	boxShadow: 3,
	p: 4,
	// height: "auto",
};

export const ModalRecortarFoto = ({
	statusModalRecorte,
	handleCloseModalRecorte,
	imagenes,
	setImagenes,
	refImagen,
	setRefVisible,
	handleCrop,
}) => {
	return (
		<Modal
			open={statusModalRecorte}
			onClose={handleCloseModalRecorte}
			sx={{ marginX: "1rem", zIndex: 9999 }}
			// hidden={true}
		>
			<Container maxWidth="lg" sx={style}>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					// justifyContent="center"
					height="100%"
					sx={{
						p: "2rem",
						// overflowY: "auto",
					}}
				>
					<Box>
						<Typography
							variant="h5"
							color="#323232"
							display="flex"
							justifyContent="center"
							align="justify"
							mb="2rem"
						>
							Verificar mi cuenta
						</Typography>
					</Box>
					<Grid container height="90%">
						<Grid item xs={12}>
							<Box
								height="100%"
								// p={2}
								bgcolor="#323232"
								// sx={{ borderRadius: "2rem" }}
							>
								{/* <div > */}
								<img
									src=""
									style={{
										display: "block",
										maxWidth: "100%",
										// maxHeight: "100%",
									}}
									className="img-cropper"
									id="img-cropper"
									ref={(el) => {
										refImagen.current = el;
										setRefVisible(!!el);
									}}
								/>
								{/* </div> */}
							</Box>
						</Grid>
					</Grid>
					<Box
						// height="10%"
						sx={{
							display: "flex",
							flexDirection: "row",
							pt: 4,
							width: "100%",
						}}
					>
						<Button color="error" variant="outlined">
							Regresar
						</Button>

						<Box sx={{ flex: "1 1 auto" }} />

						<Button
							// sx={{
							// 	"&.Mui-disabled": {
							// 		color: "#f8f7f3 !important",
							// 		border: "1px solid #f8f7f3 !important",
							// 	},
							// }}
							// color="baseButton"
							variant="contained"
							// type="submit"
							onClick={() => {
								handleCloseModalRecorte();
								handleCrop();
							}}
						>
							Cortar
						</Button>
					</Box>
				</Box>
			</Container>
		</Modal>
	);
};
