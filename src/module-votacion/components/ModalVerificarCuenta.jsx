import { PhotoCamera } from "@mui/icons-material";
import {
	Box,
	Button,
	CircularProgress,
	Container,
	FormControl,
	IconButton,
	InputLabel,
	Modal,
	OutlinedInput,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onVerificarCredencial } from "../../store/votante/votanteThunks";
import SendIcon from "@mui/icons-material/Send";

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

export const ModalVerificarCuenta = ({
	statusModalVerificar,
	handleCloseModalVerificar,
	imagenes,
	setImagenes,
}) => {
	const { statusPeticion, verificado } = useSelector((state) => state.votante);
	const { username } = useSelector((state) => state.auth);
	const [isSubmitted, setisSubmitted] = useState(false);
	const dispatch = useDispatch();

	console.log("Verificado", verificado);

	const handleVerificarCredencial = () => {
		setisSubmitted(true);
		dispatch(
			onVerificarCredencial({
				curp: username,
				credFrontalCrop: imagenes.credFrontalCrop,
				credTraseraCrop: imagenes.credTraseraCrop,
				selfieCrop: imagenes.selfieCrop,
			})
		);
	};

	return (
		<Modal
			open={verificado ? false : statusModalVerificar}
			onClose={handleCloseModalVerificar}
			sx={{ marginX: "1rem", zIndex: 9999 }}
		>
			<Container maxWidth="lg" sx={style}>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					sx={{
						// minHeight: "10rem",
						// height: "auto",
						// boxShadow: 1,
						// backgroundColor: "white",
						// borderRadius: { xs: "0.5rem", md: "1rem" },
						p: "2rem",
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
						Verificar mi cuenta
					</Typography>
					<Typography
						variant="body1"
						color="#323232"
						display="flex"
						justifyContent="center"
						align="justify"
						mb="2rem"
					>
						Para poder asegurarnos de que eres una persona real y que eres el verdadero
						dueño de esta cuenta, necesitamos que verifiques tu cuenta. Para poder
						verificar tu cuenta debes de subir una foto de la parte frontal de tu
						credencial, una foto de la parte trasera y una sefie tuya.
					</Typography>
					<Box
						display="flex"
						alignItems="center"
						sx={{ width: "100%" }}
						flexDirection="column"
					>
						<FormControl fullWidth sx={{ m: 1 }} size="small">
							<InputLabel htmlFor="credFrontal">
								Foto de la parte delantera de tu credencial
							</InputLabel>
							<OutlinedInput
								size="small"
								id="credFrontal"
								label="Foto de la parte delantera de tu credencial"
								disabled
								value={
									imagenes?.credFrontal?.name ||
									"Foto de la parte delantera de tu credencial"
								}
								endAdornment={
									<IconButton color="primary" component="label" size="medium">
										<input
											hidden
											accept="image/png,image/jpg,image/jpeg"
											type="file"
											onChange={(e) =>
												setImagenes((i) => {
													return {
														...i,
														credFrontal: e.target.files[0] || {
															name: "",
														},
														current: !e.target.files[0]
															? ""
															: "credFrontal",
													};
												})
											}
										/>
										<PhotoCamera fontSize="" />
									</IconButton>
								}
							/>
						</FormControl>
						<FormControl fullWidth sx={{ m: 1 }} size="small">
							<InputLabel htmlFor="credTrasera">
								Foto de la parte trasera de tu credencial
							</InputLabel>
							<OutlinedInput
								id="credTrasera"
								label="Foto de la parte trasera de tu credencial"
								value={
									imagenes?.credTrasera?.name ||
									"Foto de la parte trasera de tu credencial"
								}
								disabled
								endAdornment={
									<IconButton
										color="primary"
										aria-label="upload picture"
										component="label"
										size="medium"
									>
										<input
											hidden
											accept="image/png,image/jpg,image/jpeg"
											type="file"
											onChange={(e) =>
												setImagenes((i) => {
													return {
														...i,
														credTrasera: e.target.files[0] || {
															name: "",
														},
														current: !e.target.files[0]
															? ""
															: "credTrasera",
													};
												})
											}
										/>
										<PhotoCamera fontSize="" />
									</IconButton>
								}
							/>
						</FormControl>
						<FormControl fullWidth sx={{ m: 1 }} size="small">
							<InputLabel htmlFor="selfie">Selfie tuya</InputLabel>
							<OutlinedInput
								id="selfie"
								label="Selfie tuya"
								value={imagenes?.selfie?.name || "Selfie tuya"}
								disabled
								endAdornment={
									<IconButton
										color="primary"
										aria-label="upload picture"
										component="label"
										size="medium"
									>
										<input
											hidden
											accept="image/png,image/jpg,image/jpeg"
											type="file"
											onChange={(e) =>
												setImagenes((i) => {
													return {
														...i,
														selfie: e.target.files[0] || {
															name: "",
														},
														current: !e.target.files[0] ? "" : "selfie",
													};
												})
											}
										/>
										<PhotoCamera fontSize="" />
									</IconButton>
								}
							/>
						</FormControl>
					</Box>
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
							onClick={handleVerificarCredencial}
							disabled={
								imagenes.credFrontalCrop === null ||
								imagenes.credTraseraCrop === null ||
								imagenes.selfieCrop === null ||
								imagenes.credFrontal.name === "" ||
								imagenes.credTrasera.name === "" ||
								imagenes.selfie.name === "" ||
								statusPeticion === "checking"
							}
							// endIcon={<SendIcon />}
							endIcon={
								statusPeticion === "checking" ? <CircularProgress /> : <SendIcon />
							}
						>
							{statusPeticion === "checking" ? "Verificando" : "Verificar credencial"}
						</Button>
					</Box>
				</Box>
			</Container>
		</Modal>
	);
};
