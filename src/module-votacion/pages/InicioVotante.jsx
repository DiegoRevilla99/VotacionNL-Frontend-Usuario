import { PhotoCamera } from "@mui/icons-material";
import {
	Box,
	Button,
	CircularProgress,
	Container,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	onComenzarConsulta,
	onGetProcesosDelVotante,
	onGetStatusValidacion,
} from "../../store/votante/votanteThunks";
import { ModalRecortarFoto } from "../components/ModalRecortarFoto";
import { ModalTokenVotacion } from "../components/ModalTokenVotacion";
import { ModalVerificarCuenta } from "../components/ModalVerificarCuenta";
import { ModalCamara } from "../components/ModalCamara";

let cropper = null;
const tieneJornadaFormal = true;
const tieneJornadaNoFormal = false;
const tieneConsultaCiudadana = false;

export const InicioVotante = () => {
	const {
		verificado,
		statusPeticion,
		selfieVerificada,
		statusJornadas,
		jornadaFormal,
		jornadaNoFormal,
		consultaCiudadana,
	} = useSelector((state) => state.votante);
	const { username } = useSelector((state) => state.auth);
	const [statusModal, setStatusModal] = useState(false);
	const [statusModalVerificar, setStatusModalVerificar] = useState(false);
	const [statusModalRecorte, setStatusModalRecorte] = useState(false);
	const [statusModalCamara, setStatusModalCamara] = useState(false);

	const [refVisible, setRefVisible] = useState(false);
	const [cropperObject, setCropper] = useState(null);
	const [imagenes, setImagenes] = useState({
		credFrontal: {
			name: "",
		},
		credTrasera: {
			name: "",
		},
		selfie: {
			name: "",
		},
		credFrontalCrop: null,
		credTraseraCrop: null,
		selfieCrop: null,
		current: "",
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const refImagen = useRef(null);

	useEffect(() => {
		dispatch(onGetProcesosDelVotante(username));
	}, []);

	useEffect(() => {
		if (username !== "") dispatch(onGetStatusValidacion(username));
	}, [username]);

	useEffect(() => {
		if (imagenes.current === "") return;
		if (imagenes.current !== "") setStatusModalRecorte(true);
	}, [imagenes.current]);

	useEffect(() => {
		if (!refVisible) return;
		if (imagenes.current === "credFrontal" && imagenes.credFrontal.name === "") {
			setImagenes({ ...imagenes, current: "" });
			return;
		}
		if (imagenes.current === "credTrasera" && imagenes.credTrasera.name === "") {
			setImagenes({ ...imagenes, current: "" });
			return;
		}
		if (imagenes.current === "selfie" && imagenes.selfie.name === "") {
			setImagenes({ ...imagenes, current: "" });
			return;
		}

		let imgURL = null;
		if (imagenes.current === "credFrontal") imgURL = URL.createObjectURL(imagenes.credFrontal);
		else if (imagenes.current === "credTrasera")
			imgURL = URL.createObjectURL(imagenes.credTrasera);
		else imgURL = URL.createObjectURL(imagenes.selfie);

		let image = refImagen.current;
		image.src = imgURL;

		const proporcion =
			imagenes.current === "credFrontal" || imagenes.current === "credTrasera" ? 16 / 9 : 1;

		setCropper(
			(cropper = new Cropper(image, {
				aspectRatio: proporcion,
				preview: ".img-sample",
				zoomable: true,
				viewMode: 0,
				// responsive: false,
				dragMode: "move",
				ready() {
					document.querySelector(".cropper-container").style.width = "100%";
					document.querySelector(".cropper-container").style.height = "100%";
					this.cropper.setCropBoxData({
						left: 50,
						top: 50,
						width: 100,
						height: 100,
					});
				},
			}))
		);
		// console.log("container", cropper.getContainerData());
	}, [refVisible]);

	// useEffect(() => {
	// 	if (cropperObject !== null) {
	// 		const containerData = cropperObject.getContainerData();
	// 		console.log("ENTRA OPTION", cropperObject.getContainerData());
	// 		// setCropper(
	// 		// 	cropperObject.zoomTo(0.5, {
	// 		// 		x: containerData.width / 2,
	// 		// 		y: containerData.height / 2,
	// 		// 	})
	// 		// );
	// 	}
	// }, [cropperObject]);

	const rotateLeft = () => {
		if (cropperObject !== null) {
			cropperObject.rotate(-90);
		}
	};
	const rotateRight = () => {
		if (cropperObject !== null) {
			cropperObject.rotate(90);
		}
	};

	const handleCrop = () => {
		let canva = cropperObject.getCroppedCanvas({ fillColor: "#000000" });
		console.log(canva);
		let file = null;

		canva.toBlob((blob) => {
			file = new File([blob], `fileName${Math.floor(Math.random() * (90000 - 1) + 1)}.jpeg`, {
				type: "image/jpeg",
			});
			if (imagenes.current === "credFrontal")
				setImagenes({ ...imagenes, credFrontalCrop: file, current: "" });
			else if (imagenes.current === "credTrasera")
				setImagenes({ ...imagenes, credTraseraCrop: file, current: "" });
			else setImagenes({ ...imagenes, selfieCrop: file, current: "" });
		}, "image/jpeg");

		let image = refImagen.current;
		image.src = "";

		setCropper(null);
		// cropper = null;
	};

	const handleCloseModal = () => setStatusModal(false);
	const handleOpenModal = () => setStatusModal(true);
	const handleOpenModalCamara = () => setStatusModalCamara(true);
	const handleCloseModalCamara = () => setStatusModalCamara(false);
	const handleCloseModalVerificar = () => setStatusModalVerificar(false);
	const handleOpenModalVerificar = () => setStatusModalVerificar(true);
	const handleCloseModalRecorte = () => {
		if (imagenes.current === "credFrontal" && imagenes.credFrontalCrop === null)
			setImagenes({ ...imagenes, current: "", credFrontal: { name: "" } });
		else if (imagenes.current === "credTrasera" && imagenes.credTraseraCrop === null)
			setImagenes({ ...imagenes, current: "", credTrasera: { name: "" } });
		else if (imagenes.current === "selfie" && imagenes.credSelfieCrop === null)
			setImagenes({ ...imagenes, current: "", selfie: { name: "" } });

		setStatusModalRecorte(false);
	};
	const handleOpenModalRecorte = () => {
		// setImagenes({ ...imagenes, current: "" });
		setStatusModalRecorte(true);
	};

	const handleConsultaCiudadana = () => {
		dispatch(onComenzarConsulta("", navigate("/votacion/papeletas")));
	};
	return (
		<Box display="flex" height="100%" sx={{ overflowY: "auto" }}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<ModalVerificarCuenta
					statusModalVerificar={statusModalVerificar}
					handleCloseModalVerificar={handleCloseModalVerificar}
					imagenes={imagenes}
					setImagenes={setImagenes}
				/>
				<ModalRecortarFoto
					statusModalRecorte={statusModalRecorte}
					handleCloseModalRecorte={handleCloseModalRecorte}
					imagenes={imagenes}
					setImagenes={setImagenes}
					refImagen={refImagen}
					setRefVisible={setRefVisible}
					handleCrop={handleCrop}
					rotateLeft={rotateLeft}
					rotateRight={rotateRight}
				/>
				<ModalCamara
					statusModalCamara={statusModalCamara}
					handleCloseModalCamara={handleCloseModalCamara}
					handleOpenModal={handleOpenModal}
				/>
				<ModalTokenVotacion statusModal={statusModal} handleCloseModal={handleCloseModal} />
				<Grid container display="flex" spacing={5} height="100%" pt={5}>
					<Grid item xs={12}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							sx={{
								minHeight: "10rem",
								height: "100%",
								boxShadow: 1,
								backgroundColor: "white",
								borderRadius: { xs: "0.5rem", md: "1rem" },
								p: "2rem",
								// pl: "2rem",
							}}
						>
							{statusPeticion === "checking" ? (
								<>
									<Typography
										variant="h5"
										color="#323232"
										display="flex"
										justifyContent="center"
										align="justify"
										mb="2rem"
									>
										Verificando cuenta...
									</Typography>
									<Box sx={{ display: "flex" }}>
										<CircularProgress />
									</Box>
								</>
							) : (
								<>
									<Typography
										variant="h5"
										color="#323232"
										display="flex"
										justifyContent="center"
										align="center"
										mb="2rem"
									>
										{verificado
											? "Tu cuenta está verificada correctamente"
											: "Verificación de cuenta"}
									</Typography>
									{verificado ? (
										<TaskAltIcon
											sx={{ fontSize: 60, color: "#388452" }}
											// color="primary"
										/>
									) : (
										<Button
											variant="contained"
											size="large"
											color="darkButton"
											onClick={handleOpenModalVerificar}
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
											VERIFICAR MI CUENTA
										</Button>
									)}
								</>
							)}
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box width="100%" height="100%" position="relative">
							<Box
								height="auto"
								zIndex={9999}
								position="absolute"
								width="100%"
								px={2}
								py={1}
								sx={{
									backgroundColor: "#323232",
									borderTopLeftRadius: { xs: "0.5rem", md: "1rem" },
									borderTopRightRadius: { xs: "0.5rem", md: "1rem" },
								}}
							>
								<Typography
									variant="body"
									color="#fed300"
									display="flex"
									justifyContent="center"
									align="justify"
									fontWeight="bold"
								>
									JORNADAS FORMALES
								</Typography>
							</Box>
							{verificado && jornadaFormal !== null ? (
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									sx={{
										minHeight: "10rem",
										height: "100%",
										boxShadow: 1,
										backgroundColor: "white",
										borderRadius: { xs: "0.5rem", md: "1rem" },
										p: "2rem",
										// pl: "2rem",
									}}
								>
									<Typography
										variant="h6"
										color="#323232"
										display="flex"
										justifyContent="center"
										align="center"
										pt="2rem"
										mb="2rem"
									>
										Jornada electoral de Nuevo León NUEVA DIRECCIÓN 2023
									</Typography>
									<Button
										variant="contained"
										size="large"
										color="darkButton"
										// onClick={handleOpenModal}
										onClick={
											selfieVerificada
												? handleOpenModal
												: handleOpenModalCamara
										}
										sx={{
											boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
											transition: "all 0.5s ease",
											// backgroundColor: "#543884",
											width: { xs: "100%", md: "50%" },
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
							) : (
								<Box width="100%" height="100%" position="relative">
									<Box
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										height="100%"
										width="100%"
										zIndex={10}
										position="absolute"
										sx={{
											background: "rgba(120, 120, 120, 0.75 )",
											borderRadius: { xs: "0.5rem", md: "1rem" },
											backdropFilter: "blur( 10px )",
											WebkitBackdropFilter: "blur( 10px )",
											border: "1px solid rgba( 255, 255, 255, 0.18 )",
											p: "2rem",
										}}
									>
										<Box
											p={2}
											mt={4}
											border="1px solid #f8f7f3"
											borderRadius="2rem"
										>
											{statusJornadas === "checking" ? (
												<Box sx={{ display: "flex" }}>
													<CircularProgress color="base" />
												</Box>
											) : (
												<Typography
													variant="body1"
													color="#f8f7f3"
													display="flex"
													justifyContent="center"
													align="center"
												>
													{verificado
														? "No tienes ninguna jornada formal por contestar"
														: "Verifica tu cuenta para poder ver si tienes una jornada formal pendiente por contestar"}
												</Typography>
											)}
										</Box>
									</Box>
									<Box
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										// zIndex={1}
										// position="absolute"
										sx={{
											minHeight: "10rem",
											height: "100%",
											boxShadow: 1,
											backgroundColor: "white",
											borderRadius: { xs: "0.5rem", md: "1rem" },
											p: "2rem",
											// pl: "2rem",
										}}
									>
										<Typography
											variant="h6"
											color="#323232"
											display="flex"
											justifyContent="center"
											align="center"
											pt="2rem"
											mb="2rem"
										>
											Jornada electoral de Nuevo León 2023
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
												width: { xs: "100%", md: "50%" },
												// borderRadius: "2rem 2rem 2rem 2rem",
												"&:hover": {
													// backgroundColor: "#7E328B !important",
													transform: "translate(-5px, -5px)",
													boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
												},
											}}
										>
											Comenzar Votación
										</Button>
									</Box>
								</Box>
							)}
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box width="100%" height="100%" position="relative">
							<Box
								height="auto"
								zIndex={9999}
								position="absolute"
								width="100%"
								px={2}
								py={1}
								sx={{
									backgroundColor: "#323232",
									borderTopLeftRadius: { xs: "0.5rem", md: "1rem" },
									borderTopRightRadius: { xs: "0.5rem", md: "1rem" },
								}}
							>
								<Typography
									variant="body"
									color="#fed300"
									display="flex"
									justifyContent="center"
									align="justify"
									fontWeight="bold"
								>
									JORNADAS NO FORMALES
								</Typography>
							</Box>
							{jornadaNoFormal !== null ? (
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									sx={{
										minHeight: "10rem",
										height: "100%",
										boxShadow: 1,
										backgroundColor: "white",
										borderRadius: { xs: "0.5rem", md: "1rem" },
										p: "2rem",
										// pl: "2rem",
									}}
								>
									<Typography
										variant="h6"
										color="#323232"
										display="flex"
										justifyContent="center"
										align="center"
										mb="2rem"
										pt="2rem"
									>
										Jornada No formal 2023
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
											width: { xs: "100%", md: "50%" },
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
							) : (
								<Box width="100%" height="100%" position="relative">
									<Box
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										height="100%"
										width="100%"
										zIndex={10}
										position="absolute"
										p="2rem"
										sx={{
											background: "rgba(120, 120, 120, 0.75 )",
											borderRadius: { xs: "0.5rem", md: "1rem" },
											backdropFilter: "blur( 10px )",
											WebkitBackdropFilter: "blur( 10px )",
											border: "1px solid rgba( 255, 255, 255, 0.18 )",
										}}
									>
										<Box
											p={2}
											mt={4}
											border="1px solid #f8f7f3"
											borderRadius="2rem"
										>
											{statusJornadas === "checking" ? (
												<Box sx={{ display: "flex" }}>
													<CircularProgress color="base" />
												</Box>
											) : (
												<Typography
													variant="body1"
													color="#f8f7f3"
													display="flex"
													justifyContent="center"
													align="center"
												>
													No tienes ninguna jornada no formal por
													contestar
												</Typography>
											)}
										</Box>
									</Box>
									<Box
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										// zIndex={1}
										// position="absolute"
										sx={{
											minHeight: "10rem",
											height: "100%",
											boxShadow: 1,
											backgroundColor: "white",
											borderRadius: { xs: "0.5rem", md: "1rem" },
											p: "2rem",
											// pl: "2rem",
										}}
									>
										<Typography
											variant="h6"
											color="#323232"
											display="flex"
											justifyContent="center"
											align="center"
											mb="2rem"
											pt={{ xs: "2rem", md: "0" }}
										>
											Jornada No formal 2023
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
												width: { xs: "100%", md: "50%" },
												// borderRadius: "2rem 2rem 2rem 2rem",
												"&:hover": {
													// backgroundColor: "#7E328B !important",
													transform: "translate(-5px, -5px)",
													boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
												},
											}}
										>
											Comenzar Votación
										</Button>
									</Box>
								</Box>
							)}
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Box width="100%" height="100%" position="relative">
							<Box
								height="auto"
								zIndex={9999}
								position="absolute"
								width="100%"
								px={2}
								py={1}
								sx={{
									backgroundColor: "#323232",
									borderTopLeftRadius: { xs: "0.5rem", md: "1rem" },
									borderTopRightRadius: { xs: "0.5rem", md: "1rem" },
								}}
							>
								<Typography
									variant="body"
									color="#fed300"
									display="flex"
									justifyContent="center"
									align="justify"
									fontWeight="bold"
								>
									CONSULTAS CIUDADANAS
								</Typography>
							</Box>
							{consultaCiudadana !== null ? (
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									sx={{
										minHeight: "10rem",
										height: "100%",
										boxShadow: 1,
										backgroundColor: "white",
										borderRadius: { xs: "0.5rem", md: "1rem" },
										p: "2rem",
										// pl: "2rem",
									}}
								>
									<Typography
										variant="h6"
										color="#323232"
										display="flex"
										justifyContent="center"
										align="center"
										mb="2rem"
										pt={{ xs: "2rem", md: "0" }}
									>
										Consulta Ciudadana Nuevo León 2023
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
											width: { xs: "100%", md: "50%" },
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
							) : (
								<Box width="100%" height="100%" position="relative">
									<Box
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										height="100%"
										width="100%"
										zIndex={10}
										position="absolute"
										p="2rem"
										sx={{
											background: "rgba(120, 120, 120, 0.75 )",
											borderRadius: { xs: "0.5rem", md: "1rem" },
											backdropFilter: "blur( 10px )",
											WebkitBackdropFilter: "blur( 10px )",
											border: "1px solid rgba( 255, 255, 255, 0.18 )",
										}}
									>
										<Box
											p={2}
											mt={4}
											border="1px solid #f8f7f3"
											borderRadius="2rem"
										>
											{statusJornadas === "checking" ? (
												<Box sx={{ display: "flex" }}>
													<CircularProgress color="base" />
												</Box>
											) : (
												<Typography
													variant="body1"
													color="#f8f7f3"
													display="flex"
													justifyContent="center"
													align="center"
												>
													No tienes ninguna consulta ciudadana por
													contestar
												</Typography>
											)}
										</Box>
									</Box>
									<Box
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										// zIndex={1}
										// position="absolute"
										sx={{
											minHeight: "10rem",
											height: "100%",
											boxShadow: 1,
											backgroundColor: "white",
											borderRadius: { xs: "0.5rem", md: "1rem" },
											p: "2rem",
											// pl: "2rem",
										}}
									>
										<Typography
											variant="h6"
											color="#323232"
											display="flex"
											justifyContent="center"
											align="center"
											mb="2rem"
											pt={{ xs: "2rem", md: "0" }}
										>
											Jornada electoral de Nuevo León NUEVA DIRECCIÓN 2023
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
												width: { xs: "100%", md: "50%" },
												// borderRadius: "2rem 2rem 2rem 2rem",
												"&:hover": {
													// backgroundColor: "#7E328B !important",
													transform: "translate(-5px, -5px)",
													boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
												},
											}}
										>
											Comenzar Votación
										</Button>
									</Box>
								</Box>
							)}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
